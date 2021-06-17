'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var stream = require('stream');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function serializeMsgPack(data) {
    var pow32 = 0x100000000; // 2^32
    var array = new Uint8Array(128);
    var length = 0;
    append(data);
    function append(data) {
        switch (typeof data) {
            case 'undefined':
                appendNull();
                break;
            case 'boolean':
                appendBoolean(data);
                break;
            case 'number':
                appendNumber(data);
                break;
            case 'string':
                appendString(data);
                break;
            case 'object':
                if (Array.isArray(data))
                    appendArray(data);
                else if (data instanceof Date)
                    appendDate(data);
                else if (data === null)
                    appendNull();
                else if (data.length) {
                    appendBinary(data);
                }
                else {
                    appendObject(data);
                }
                break;
            case 'pointer':
            case 'function':
                appendNull();
                break;
            default:
                throw new Error('unsupported type:' + typeof data);
                break;
        }
    }
    function appendBinary(data) {
        var length = data.byteLength;
        if (length <= 0xff)
            appendBytes([0xc7, length]);
        else if (length <= 0xffff)
            appendBytes([0xc8, length >>> 8, length]);
        else
            appendBytes([0xc9, length >>> 24, length >>> 16, length >>> 8, length]);
        appendByte(0);
        appendBytes(data);
    }
    function appendNull(data) {
        appendByte(0xc0);
    }
    function appendBoolean(data) {
        appendByte(data ? 0xc3 : 0xc2);
    }
    function appendNumber(data) {
        if (isFinite(data) && Math.floor(data) === data) {
            // Integer
            if (data >= 0 && data <= 0x7f) {
                appendByte(data);
            }
            else if (data < 0 && data >= -0x20) {
                appendByte(data);
            }
            else if (data > 0 && data <= 0xff) {
                // uint8
                appendBytes([0xcc, data]);
            }
            else if (data >= -0x80 && data <= 0x7f) {
                // int8
                appendBytes([0xd0, data]);
            }
            else if (data > 0 && data <= 0xffff) {
                // uint16
                appendBytes([0xcd, data >>> 8, data]);
            }
            else if (data >= -0x8000 && data <= 0x7fff) {
                // int16
                appendBytes([0xd1, data >>> 8, data]);
            }
            else if (data > 0 && data <= 0xffffffff) {
                // uint32
                appendBytes([0xce, data >>> 24, data >>> 16, data >>> 8, data]);
            }
            else if (data >= -0x80000000 && data <= 0x7fffffff) {
                // int32
                appendBytes([0xd2, data >>> 24, data >>> 16, data >>> 8, data]);
            }
            else if (data > 0 && data <= 0xffffffffffffffff) {
                // uint64
                // Split 64 bit number into two 32 bit numbers because JavaScript only regards
                // 32 bits for bitwise operations.
                var hi = data / pow32;
                var lo = data % pow32;
                appendBytes([0xd3, hi >>> 24, hi >>> 16, hi >>> 8, hi, lo >>> 24, lo >>> 16, lo >>> 8, lo]);
            }
            else if (data >= -0x8000000000000000 && data <= 0x7fffffffffffffff) {
                // int64
                // Split 64 bit number into two 32 bit numbers because JavaScript only regards
                // 32 bits for bitwise operations.
                var hi, lo;
                if (data >= 0) {
                    // Same as uint64
                    hi = data / pow32;
                    lo = data % pow32;
                }
                else {
                    // Split absolute value to high and low, then NOT and ADD(1) to restore negativity
                    data++;
                    hi = Math.abs(data) / pow32;
                    lo = Math.abs(data) % pow32;
                    hi = ~hi;
                    lo = ~lo;
                }
                appendBytes([0xd3, hi >>> 24, hi >>> 16, hi >>> 8, hi, lo >>> 24, lo >>> 16, lo >>> 8, lo]);
            }
            else if (data < 0) {
                // below int64
                appendBytes([0xd3, 0x80, 0, 0, 0, 0, 0, 0, 0]);
            }
            else {
                // above uint64
                appendBytes([0xcf, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]);
            }
        }
        else {
            // Float
            var buffer = new ArrayBuffer(8);
            var view = new DataView(buffer);
            view.setFloat64(0, data);
            appendByte(0xcb);
            appendBytes(new Uint8Array(buffer));
        }
    }
    function appendString(data) {
        var bytes = encodeUtf8(data);
        var length = bytes.length;
        if (length <= 0x1f)
            appendByte(0xa0 + length);
        else if (length <= 0xff)
            appendBytes([0xd9, length]);
        else if (length <= 0xffff)
            appendBytes([0xda, length >>> 8, length]);
        else
            appendBytes([0xdb, length >>> 24, length >>> 16, length >>> 8, length]);
        appendBytes(bytes);
    }
    function appendArray(data) {
        var length = data.length;
        if (length <= 0xf)
            appendByte(0x90 + length);
        else if (length <= 0xffff)
            appendBytes([0xdc, length >>> 8, length]);
        else
            appendBytes([0xdd, length >>> 24, length >>> 16, length >>> 8, length]);
        for (var index = 0; index < length; index++) {
            append(data[index]);
        }
    }
    function appendObject(data) {
        var length = 0;
        for (var key in data)
            length++;
        if (length <= 0xf)
            appendByte(0x80 + length);
        else if (length <= 0xffff)
            appendBytes([0xde, length >>> 8, length]);
        else
            appendBytes([0xdf, length >>> 24, length >>> 16, length >>> 8, length]);
        for (var key in data) {
            append(key);
            append(data[key]);
        }
    }
    function appendDate(data) {
        var seconds = data.getTime() / 1000;
        if (data.getMilliseconds() === 0 && seconds < 0x100000000) {
            // 32 bit seconds
            appendBytes([0xd6, 0xff, seconds >>> 24, seconds >>> 16, seconds >>> 8, seconds]);
        }
        else if (seconds < 0x400000000) {
            // 30 bit nanoseconds, 34 bit seconds
            var nanoseconds = data.getMilliseconds() * 1000000;
            var seconds = data.getTime() / 1000;
            appendBytes([
                0xd7,
                0xff,
                nanoseconds >>> 22,
                nanoseconds >>> 14,
                nanoseconds >>> 6,
                ((nanoseconds << 2) >>> 0) | (seconds / pow32),
                seconds >>> 24,
                seconds >>> 16,
                seconds >>> 8,
                seconds
            ]);
        }
        else {
            // 32 bit nanoseconds, 64 bit seconds
            var nanoseconds = data.getMilliseconds() * 1000000;
            var seconds = data.getTime() / 1000;
            hi = seconds / pow32;
            lo = seconds % pow32;
            appendBytes([
                0xc7,
                12,
                0xff,
                nanoseconds >>> 24,
                nanoseconds >>> 16,
                nanoseconds >>> 8,
                nanoseconds,
                hi >>> 24,
                hi >>> 16,
                hi >>> 8,
                hi,
                lo >>> 24,
                lo >>> 16,
                lo >>> 8,
                lo
            ]);
        }
    }
    function appendByte(byte) {
        if (array.length < length + 1) {
            var newLength = array.length * 2;
            while (newLength < length + 1)
                newLength *= 2;
            var newArray = new Uint8Array(newLength);
            newArray.set(array);
            array = newArray;
        }
        array[length] = byte;
        length++;
    }
    function appendBytes(bytes) {
        if (array.length < length + bytes.length) {
            var newLength = array.length * 2;
            while (newLength < length + bytes.length)
                newLength *= 2;
            var newArray = new Uint8Array(newLength);
            newArray.set(array);
            array = newArray;
        }
        array.set(bytes, length);
        length += bytes.length;
    }
    function encodeUtf8(str) {
        // Prevent excessive array allocation and slicing for all 7-bit characters
        var ascii = true;
        for (var x = 0; x < str.length; x++) {
            if (str.charCodeAt(x) >= 128) {
                ascii = false;
                break;
            }
        }
        // Source: https://gist.github.com/pascaldekloe/62546103a1576803dade9269ccf76330
        var i = 0, bytes = new Uint8Array(str.length * (ascii ? 1 : 4));
        for (var ci = 0; ci != str.length; ci++) {
            var c = str.charCodeAt(ci);
            if (c < 128) {
                bytes[i++] = c;
                continue;
            }
            if (c < 2048) {
                bytes[i++] = (c >> 6) | 192;
            }
            else {
                if (c > 0xd7ff && c < 0xdc00) {
                    if (++ci >= str.length)
                        throw new Error('UTF-8 encode: incomplete surrogate pair');
                    var c2 = str.charCodeAt(ci);
                    if (c2 < 0xdc00 || c2 > 0xdfff)
                        throw new Error('UTF-8 encode: second surrogate character 0x' +
                            c2.toString(16) +
                            ' at index ' +
                            ci +
                            ' out of range');
                    c = 0x10000 + ((c & 0x03ff) << 10) + (c2 & 0x03ff);
                    bytes[i++] = (c >> 18) | 240;
                    bytes[i++] = ((c >> 12) & 63) | 128;
                }
                else
                    bytes[i++] = (c >> 12) | 224;
                bytes[i++] = ((c >> 6) & 63) | 128;
            }
            bytes[i++] = (c & 63) | 128;
        }
        return ascii ? bytes : bytes.subarray(0, i);
    }
    return array.subarray(0, length);
}
function deserializeMsgPack(array) {
    var pow32 = 0x100000000; // 2^32
    var pos = 0;
    var data = read();
    if (pos < array.length) ;
    return data;
    function read() {
        var byte = array[pos++];
        if (byte >= 0x00 && byte <= 0x7f)
            return byte; // positive fixint
        if (byte >= 0x80 && byte <= 0x8f)
            return readMap(byte - 0x80); // fixmap
        if (byte >= 0x90 && byte <= 0x9f)
            return readArray(byte - 0x90); // fixarray
        if (byte >= 0xa0 && byte <= 0xbf)
            return readStr(byte - 0xa0); // fixstr
        if (byte === 0xc0)
            return null; // nil
        if (byte === 0xc1)
            throw new Error('Matched no byte code. Value is 0xc1 error'); // never used
        if (byte === 0xc2)
            return false; // false
        if (byte === 0xc3)
            return true; // true
        if (byte === 0xc4)
            return readBin(1); // bin 8
        if (byte === 0xc5)
            return readBin(2); // bin 16
        if (byte === 0xc6)
            return readBin(4); // bin 32
        if (byte === 0xc7)
            return readExt(-1, 1); // ext 8
        if (byte === 0xc8)
            return readExt(-1, 2); // ext 16
        if (byte === 0xc9)
            return readExt(-1, 4); // ext 32
        if (byte === 0xca)
            return readFloat(4); // float 32
        if (byte === 0xcb)
            return readFloat(8); // float 64
        if (byte === 0xcc)
            return readUInt(1); // uint 8
        if (byte === 0xcd)
            return readUInt(2); // uint 16
        if (byte === 0xce)
            return readUInt(4); // uint 32
        if (byte === 0xcf)
            return readUInt(8); // uint 64
        if (byte === 0xd0)
            return readInt(1); // int 8
        if (byte === 0xd1)
            return readInt(2); // int 16
        if (byte === 0xd2)
            return readInt(4); // int 32
        if (byte === 0xd3)
            return readInt(8); // int 64
        if (byte === 0xd4)
            return readExt(1); // fixext 1
        if (byte === 0xd5)
            return readExt(2); // fixext 2
        if (byte === 0xd6)
            return readExt(4); // fixext 4
        if (byte === 0xd7)
            return readExt(8); // fixext 8
        if (byte === 0xd8)
            return readExt(16); // fixext 16
        if (byte === 0xd9)
            return readStr(-1, 1); // str 8
        if (byte === 0xda)
            return readStr(-1, 2); // str 16
        if (byte === 0xdb)
            return readStr(-1, 4); // str 32
        if (byte === 0xdc)
            return readArray(-1, 2); // array 16
        if (byte === 0xdd)
            return readArray(-1, 4); // array 32
        if (byte === 0xde)
            return readMap(-1, 2); // map 16
        if (byte === 0xdf)
            return readMap(-1, 4); // map 32
        if (byte >= 0xe0 && byte <= 0xff)
            return byte - 256; // negative fixint
        throw new Error('Matched no byte code. Value is ' + byte + '. This should never happen.');
    }
    function readInt(size) {
        var value = 0;
        var first = true;
        while (size-- > 0) {
            if (first) {
                var byte = array[pos++];
                value += byte & 0x7f;
                if (byte & 0x80) {
                    value -= 0x80; // Treat most-significant bit as -2^i instead of 2^i
                }
                first = false;
            }
            else {
                value *= 256;
                value += array[pos++];
            }
        }
        return value;
    }
    function readUInt(size) {
        var value = 0;
        while (size-- > 0) {
            value *= 256;
            value += array[pos++];
        }
        return value;
    }
    function readFloat(size) {
        // Need to select the bytes here because readBin's subarray() is only a view
        var view = new DataView(array.buffer, array.byteOffset + pos, size);
        pos += size;
        if (size === 4)
            return view.getFloat32(0, false);
        if (size === 8)
            return view.getFloat64(0, false);
    }
    function readBin(size) {
        var data = array.subarray(pos, pos + size);
        pos += size;
        return data;
    }
    function readMap(size, lengthSize) {
        if (size < 0)
            size = readUInt(lengthSize);
        var data = {};
        while (size-- > 0) {
            var key = read();
            data[key] = read();
        }
        return data;
    }
    function readArray(size, lengthSize) {
        if (size < 0)
            size = readUInt(lengthSize);
        var data = [];
        while (size-- > 0) {
            data.push(read());
        }
        return data;
    }
    function readStr(size, lengthSize) {
        if (size < 0)
            size = readUInt(lengthSize);
        var bytes = readBin(size);
        return decodeUtf8(bytes);
    }
    function readExt(size, lengthSize) {
        if (size < 0)
            size = readUInt(lengthSize);
        var type = readUInt(1);
        var data = readBin(size);
        switch (type) {
            case 0:
                return data;
            case 1:
                break;
            case 255:
                return readExtDate(data);
        }
        return { type: type, data: data };
    }
    function readExtDate(data) {
        if (data.length === 4) {
            var sec = ((data[0] << 24) >>> 0) + ((data[1] << 16) >>> 0) + ((data[2] << 8) >>> 0) + data[3];
            return new Date(sec * 1000);
        }
        if (data.length === 8) {
            var ns = ((data[0] << 22) >>> 0) + ((data[1] << 14) >>> 0) + ((data[2] << 6) >>> 0) + (data[3] >>> 2);
            var sec = (data[3] & 0x3) * pow32 +
                ((data[4] << 24) >>> 0) +
                ((data[5] << 16) >>> 0) +
                ((data[6] << 8) >>> 0) +
                data[7];
            return new Date(sec * 1000 + ns / 1000000);
        }
        if (data.length === 12) {
            var ns = ((data[0] << 24) >>> 0) + ((data[1] << 16) >>> 0) + ((data[2] << 8) >>> 0) + data[3];
            var hi = ((data[4] << 24) >>> 0) + ((data[5] << 16) >>> 0) + ((data[6] << 8) >>> 0) + data[7];
            var lo = ((data[8] << 24) >>> 0) + ((data[9] << 16) >>> 0) + ((data[10] << 8) >>> 0) + data[11];
            var sec = hi * pow32 + lo;
            return new Date(sec * 1000 + ns / 1000000);
        }
        throw new Error('Invalid data length for a date value.');
    }
    function decodeUtf8(bytes) {
        // Source: https://gist.github.com/pascaldekloe/62546103a1576803dade9269ccf76330
        var i = 0, str = '';
        while (i < bytes.length) {
            var c = bytes[i++];
            if (c > 127) {
                if (c > 191 && c < 224) {
                    if (i >= bytes.length)
                        throw new Error('UTF-8 decode: incomplete 2-byte sequence');
                    c = ((c & 31) << 6) | (bytes[i++] & 63);
                }
                else if (c > 223 && c < 240) {
                    if (i + 1 >= bytes.length)
                        throw new Error('UTF-8 decode: incomplete 3-byte sequence');
                    c = ((c & 15) << 12) | ((bytes[i++] & 63) << 6) | (bytes[i++] & 63);
                }
                else if (c > 239 && c < 248) {
                    if (i + 2 >= bytes.length)
                        throw new Error('UTF-8 decode: incomplete 4-byte sequence');
                    c = ((c & 7) << 18) | ((bytes[i++] & 63) << 12) | ((bytes[i++] & 63) << 6) | (bytes[i++] & 63);
                }
                else
                    throw new Error('UTF-8 decode: unknown multibyte start 0x' + c.toString(16) + ' at index ' + (i - 1));
            }
            if (c <= 0xffff)
                str += String.fromCharCode(c);
            else if (c <= 0x10ffff) {
                c -= 0x10000;
                str += String.fromCharCode((c >> 10) | 0xd800);
                str += String.fromCharCode((c & 0x3ff) | 0xdc00);
            }
            else
                throw new Error('UTF-8 decode: code point 0x' + c.toString(16) + ' exceeds UTF-16 reach');
        }
        return str;
    }
}
var msgpack = {
    encode: serializeMsgPack,
    decode: deserializeMsgPack
};
var msgpack_1 = msgpack.encode;
var msgpack_2 = msgpack.decode;

function checkCrc(data) {
    return ((data[3] + data[4] + data[5] + data[6] + data[7]) & 0xff) == data[8];
}
var packStream = /** @class */ (function (_super) {
    __extends(packStream, _super);
    function packStream() {
        return _super.call(this, { objectMode: true }) || this;
    }
    packStream.prototype._read = function () { };
    packStream.prototype._write = function (chunk, encoding, callback) {
        var type = 0;
        var i = 0;
        var tmp = msgpack_1(chunk);
        var buf = Buffer.alloc(9 + tmp.length);
        buf[i++] = 0x00;
        buf[i++] = 0x00;
        buf[i++] = 0x01;
        buf[i++] = tmp.length >> 24;
        buf[i++] = tmp.length >> 16;
        buf[i++] = tmp.length >> 8;
        buf[i++] = tmp.length;
        buf[i++] = type;
        buf[i++] = buf[3] + buf[4] + buf[5] + buf[6] + buf[7];
        buf.set(tmp, 9);
        this.push(buf);
        callback();
    };
    return packStream;
}(stream.Duplex));
var unpackStream = /** @class */ (function (_super) {
    __extends(unpackStream, _super);
    function unpackStream() {
        var _this = _super.call(this, { objectMode: true }) || this;
        _this._len = 0;
        _this._end = 0;
        _this._type = 0;
        return _this;
    }
    unpackStream.prototype._read = function () { };
    unpackStream.prototype._write = function (chunk, encoding, callback) {
        this.checkData(chunk);
        while (this.next()) {
            this.push(msgpack_2(this._buf));
        }
        callback();
    };
    unpackStream.prototype.checkData = function (data) {
        var tmp;
        switch (data.constructor.name) {
            case 'Buffer':
                tmp = data;
                break;
            case 'ArrayBuffer':
                tmp = new Buffer(data);
                break;
            case 'String':
                tmp = new Buffer(data);
                break;
            default:
                if (data.length) {
                    tmp = new Buffer(data);
                }
                else {
                    tmp = new Buffer(typeof data);
                }
                break;
        }
        if (this._tmp) {
            this._tmp = Buffer.concat([this._tmp, new Buffer(tmp)]);
        }
        else {
            this._tmp = tmp;
        }
    };
    unpackStream.prototype.checkHead = function () {
        var sp = 2;
        if (this._tmp.length < 9) {
            return false;
        }
        while (sp < this._tmp.length) {
            switch (this._tmp[sp]) {
                case 0:
                    if (this._tmp[sp - 1] != 0) {
                        sp += 2;
                        break;
                    }
                    else {
                        sp += 1;
                        break;
                    }
                    break;
                case 1:
                    if (this._tmp[sp - 1] != 0 || this._tmp[sp - 2] != 0) {
                        sp += 3;
                    }
                    else {
                        this._tmp = this._tmp.slice(sp - 2);
                        return true;
                    }
                    break;
                default:
                    sp += 3;
                    break;
            }
        }
        this._tmp = this._tmp.slice(this._tmp.length - 3);
        return false;
    };
    unpackStream.prototype.head = function () {
        if (this._tmp.length > 8) {
            this._len = (this._tmp[3] << 24) + (this._tmp[4] << 16) + (this._tmp[5] << 8) + this._tmp[6];
            this._end = this._len + 9;
            this._type = this._tmp[7];
            return true;
        }
        return false;
    };
    unpackStream.prototype.parse = function () {
        if (this._end > this._tmp.length) {
            return false;
        }
        if (this._end == this._tmp.length) {
            this._buf = this._tmp.slice(9);
            this._tmp = Buffer.alloc(0);
        }
        else {
            this._buf = this._tmp.slice(9, this._end);
            this._tmp = this._tmp.slice(this._end);
        }
        this._len = 0;
        this._end = 0;
        return true;
    };
    unpackStream.prototype.next = function () {
        while (1) {
            if (!this._tmp) {
                return false;
            }
            if (!this.checkHead()) {
                return false;
            }
            if (!this.head()) {
                return false;
            }
            if (!checkCrc(this._tmp)) {
                this._tmp = this._tmp.slice(3);
                continue;
            }
            if (!this.parse()) {
                return false;
            }
            return true;
        }
    };
    return unpackStream;
}(stream.Duplex));

exports.packStream = packStream;
exports.unpackStream = unpackStream;

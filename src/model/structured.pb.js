/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.structured = (function() {

    /**
     * Namespace structured.
     * @exports structured
     * @namespace
     */
    var structured = {};

    structured.StructuredData = (function() {

        /**
         * Properties of a StructuredData.
         * @memberof structured
         * @interface IStructuredData
         * @property {string|null} [uid] StructuredData uid
         * @property {string|null} [iid] StructuredData iid
         * @property {string|null} [pid] StructuredData pid
         * @property {string|null} [clientAppId] StructuredData clientAppId
         * @property {number|Long|null} [timestamp] StructuredData timestamp
         * @property {string|null} [timeZone] StructuredData timeZone
         * @property {string|null} [namespace] StructuredData namespace
         * @property {string|null} [name] StructuredData name
         * @property {structured.StructuredData.FieldType|null} [fieldType] StructuredData fieldType
         * @property {Array.<structured.StructuredData.IField>|null} [fields] StructuredData fields
         */

        /**
         * Constructs a new StructuredData.
         * @memberof structured
         * @classdesc Represents a StructuredData.
         * @implements IStructuredData
         * @constructor
         * @param {structured.IStructuredData=} [properties] Properties to set
         */
        function StructuredData(properties) {
            this.fields = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StructuredData uid.
         * @member {string} uid
         * @memberof structured.StructuredData
         * @instance
         */
        StructuredData.prototype.uid = "";

        /**
         * StructuredData iid.
         * @member {string} iid
         * @memberof structured.StructuredData
         * @instance
         */
        StructuredData.prototype.iid = "";

        /**
         * StructuredData pid.
         * @member {string} pid
         * @memberof structured.StructuredData
         * @instance
         */
        StructuredData.prototype.pid = "";

        /**
         * StructuredData clientAppId.
         * @member {string} clientAppId
         * @memberof structured.StructuredData
         * @instance
         */
        StructuredData.prototype.clientAppId = "";

        /**
         * StructuredData timestamp.
         * @member {number|Long} timestamp
         * @memberof structured.StructuredData
         * @instance
         */
        StructuredData.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StructuredData timeZone.
         * @member {string} timeZone
         * @memberof structured.StructuredData
         * @instance
         */
        StructuredData.prototype.timeZone = "";

        /**
         * StructuredData namespace.
         * @member {string} namespace
         * @memberof structured.StructuredData
         * @instance
         */
        StructuredData.prototype.namespace = "";

        /**
         * StructuredData name.
         * @member {string} name
         * @memberof structured.StructuredData
         * @instance
         */
        StructuredData.prototype.name = "";

        /**
         * StructuredData fieldType.
         * @member {structured.StructuredData.FieldType} fieldType
         * @memberof structured.StructuredData
         * @instance
         */
        StructuredData.prototype.fieldType = 0;

        /**
         * StructuredData fields.
         * @member {Array.<structured.StructuredData.IField>} fields
         * @memberof structured.StructuredData
         * @instance
         */
        StructuredData.prototype.fields = $util.emptyArray;

        /**
         * Creates a new StructuredData instance using the specified properties.
         * @function create
         * @memberof structured.StructuredData
         * @static
         * @param {structured.IStructuredData=} [properties] Properties to set
         * @returns {structured.StructuredData} StructuredData instance
         */
        StructuredData.create = function create(properties) {
            return new StructuredData(properties);
        };

        /**
         * Encodes the specified StructuredData message. Does not implicitly {@link structured.StructuredData.verify|verify} messages.
         * @function encode
         * @memberof structured.StructuredData
         * @static
         * @param {structured.IStructuredData} message StructuredData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StructuredData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestamp);
            if (message.timeZone != null && message.hasOwnProperty("timeZone"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.timeZone);
            if (message.namespace != null && message.hasOwnProperty("namespace"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.namespace);
            if (message.clientAppId != null && message.hasOwnProperty("clientAppId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.clientAppId);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.name);
            if (message.fieldType != null && message.hasOwnProperty("fieldType"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.fieldType);
            if (message.fields != null && message.fields.length)
                for (var i = 0; i < message.fields.length; ++i)
                    $root.structured.StructuredData.Field.encode(message.fields[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.iid != null && message.hasOwnProperty("iid"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.iid);
            if (message.pid != null && message.hasOwnProperty("pid"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.pid);
            return writer;
        };

        /**
         * Encodes the specified StructuredData message, length delimited. Does not implicitly {@link structured.StructuredData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof structured.StructuredData
         * @static
         * @param {structured.IStructuredData} message StructuredData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StructuredData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StructuredData message from the specified reader or buffer.
         * @function decode
         * @memberof structured.StructuredData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {structured.StructuredData} StructuredData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StructuredData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.structured.StructuredData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                case 14:
                    message.iid = reader.string();
                    break;
                case 15:
                    message.pid = reader.string();
                    break;
                case 10:
                    message.clientAppId = reader.string();
                    break;
                case 2:
                    message.timestamp = reader.int64();
                    break;
                case 3:
                    message.timeZone = reader.string();
                    break;
                case 4:
                    message.namespace = reader.string();
                    break;
                case 11:
                    message.name = reader.string();
                    break;
                case 12:
                    message.fieldType = reader.int32();
                    break;
                case 13:
                    if (!(message.fields && message.fields.length))
                        message.fields = [];
                    message.fields.push($root.structured.StructuredData.Field.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StructuredData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof structured.StructuredData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {structured.StructuredData} StructuredData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StructuredData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StructuredData message.
         * @function verify
         * @memberof structured.StructuredData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StructuredData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.iid != null && message.hasOwnProperty("iid"))
                if (!$util.isString(message.iid))
                    return "iid: string expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isString(message.pid))
                    return "pid: string expected";
            if (message.clientAppId != null && message.hasOwnProperty("clientAppId"))
                if (!$util.isString(message.clientAppId))
                    return "clientAppId: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.timeZone != null && message.hasOwnProperty("timeZone"))
                if (!$util.isString(message.timeZone))
                    return "timeZone: string expected";
            if (message.namespace != null && message.hasOwnProperty("namespace"))
                if (!$util.isString(message.namespace))
                    return "namespace: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.fieldType != null && message.hasOwnProperty("fieldType"))
                switch (message.fieldType) {
                default:
                    return "fieldType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                    break;
                }
            if (message.fields != null && message.hasOwnProperty("fields")) {
                if (!Array.isArray(message.fields))
                    return "fields: array expected";
                for (var i = 0; i < message.fields.length; ++i) {
                    var error = $root.structured.StructuredData.Field.verify(message.fields[i]);
                    if (error)
                        return "fields." + error;
                }
            }
            return null;
        };

        /**
         * Creates a StructuredData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof structured.StructuredData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {structured.StructuredData} StructuredData
         */
        StructuredData.fromObject = function fromObject(object) {
            if (object instanceof $root.structured.StructuredData)
                return object;
            var message = new $root.structured.StructuredData();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.iid != null)
                message.iid = String(object.iid);
            if (object.pid != null)
                message.pid = String(object.pid);
            if (object.clientAppId != null)
                message.clientAppId = String(object.clientAppId);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.timeZone != null)
                message.timeZone = String(object.timeZone);
            if (object.namespace != null)
                message.namespace = String(object.namespace);
            if (object.name != null)
                message.name = String(object.name);
            switch (object.fieldType) {
            case "FIELD_TYPE_NONE":
            case 0:
                message.fieldType = 0;
                break;
            case "STRING":
            case 1:
                message.fieldType = 1;
                break;
            case "NUMBER":
            case 2:
                message.fieldType = 2;
                break;
            case "BOOL":
            case 3:
                message.fieldType = 3;
                break;
            case "CTR":
            case 4:
                message.fieldType = 4;
                break;
            case "LOCATION":
            case 5:
                message.fieldType = 5;
                break;
            case "DATETIME":
            case 6:
                message.fieldType = 6;
                break;
            case "DURATION":
            case 7:
                message.fieldType = 7;
                break;
            case "TIME_RANGE":
            case 8:
                message.fieldType = 8;
                break;
            case "ENUM":
            case 9:
                message.fieldType = 9;
                break;
            case "URL":
            case 10:
                message.fieldType = 10;
                break;
            }
            if (object.fields) {
                if (!Array.isArray(object.fields))
                    throw TypeError(".structured.StructuredData.fields: array expected");
                message.fields = [];
                for (var i = 0; i < object.fields.length; ++i) {
                    if (typeof object.fields[i] !== "object")
                        throw TypeError(".structured.StructuredData.fields: object expected");
                    message.fields[i] = $root.structured.StructuredData.Field.fromObject(object.fields[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a StructuredData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof structured.StructuredData
         * @static
         * @param {structured.StructuredData} message StructuredData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StructuredData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.fields = [];
            if (options.defaults) {
                object.uid = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.timeZone = "";
                object.namespace = "";
                object.clientAppId = "";
                object.name = "";
                object.fieldType = options.enums === String ? "FIELD_TYPE_NONE" : 0;
                object.iid = "";
                object.pid = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.timeZone != null && message.hasOwnProperty("timeZone"))
                object.timeZone = message.timeZone;
            if (message.namespace != null && message.hasOwnProperty("namespace"))
                object.namespace = message.namespace;
            if (message.clientAppId != null && message.hasOwnProperty("clientAppId"))
                object.clientAppId = message.clientAppId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.fieldType != null && message.hasOwnProperty("fieldType"))
                object.fieldType = options.enums === String ? $root.structured.StructuredData.FieldType[message.fieldType] : message.fieldType;
            if (message.fields && message.fields.length) {
                object.fields = [];
                for (var j = 0; j < message.fields.length; ++j)
                    object.fields[j] = $root.structured.StructuredData.Field.toObject(message.fields[j], options);
            }
            if (message.iid != null && message.hasOwnProperty("iid"))
                object.iid = message.iid;
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            return object;
        };

        /**
         * Converts this StructuredData to JSON.
         * @function toJSON
         * @memberof structured.StructuredData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StructuredData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * FieldType enum.
         * @name structured.StructuredData.FieldType
         * @enum {string}
         * @property {number} FIELD_TYPE_NONE=0 FIELD_TYPE_NONE value
         * @property {number} STRING=1 STRING value
         * @property {number} NUMBER=2 NUMBER value
         * @property {number} BOOL=3 BOOL value
         * @property {number} CTR=4 CTR value
         * @property {number} LOCATION=5 LOCATION value
         * @property {number} DATETIME=6 DATETIME value
         * @property {number} DURATION=7 DURATION value
         * @property {number} TIME_RANGE=8 TIME_RANGE value
         * @property {number} ENUM=9 ENUM value
         * @property {number} URL=10 URL value
         */
        StructuredData.FieldType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FIELD_TYPE_NONE"] = 0;
            values[valuesById[1] = "STRING"] = 1;
            values[valuesById[2] = "NUMBER"] = 2;
            values[valuesById[3] = "BOOL"] = 3;
            values[valuesById[4] = "CTR"] = 4;
            values[valuesById[5] = "LOCATION"] = 5;
            values[valuesById[6] = "DATETIME"] = 6;
            values[valuesById[7] = "DURATION"] = 7;
            values[valuesById[8] = "TIME_RANGE"] = 8;
            values[valuesById[9] = "ENUM"] = 9;
            values[valuesById[10] = "URL"] = 10;
            return values;
        })();

        StructuredData.Field = (function() {

            /**
             * Properties of a Field.
             * @memberof structured.StructuredData
             * @interface IField
             * @property {string|null} [key] Field key
             * @property {string|null} [stringValue] Field stringValue
             * @property {number|Long|null} [intValue] Field intValue
             * @property {number|null} [doubleValue] Field doubleValue
             * @property {boolean|null} [boolValue] Field boolValue
             */

            /**
             * Constructs a new Field.
             * @memberof structured.StructuredData
             * @classdesc Represents a Field.
             * @implements IField
             * @constructor
             * @param {structured.StructuredData.IField=} [properties] Properties to set
             */
            function Field(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Field key.
             * @member {string} key
             * @memberof structured.StructuredData.Field
             * @instance
             */
            Field.prototype.key = "";

            /**
             * Field stringValue.
             * @member {string} stringValue
             * @memberof structured.StructuredData.Field
             * @instance
             */
            Field.prototype.stringValue = "";

            /**
             * Field intValue.
             * @member {number|Long} intValue
             * @memberof structured.StructuredData.Field
             * @instance
             */
            Field.prototype.intValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Field doubleValue.
             * @member {number} doubleValue
             * @memberof structured.StructuredData.Field
             * @instance
             */
            Field.prototype.doubleValue = 0;

            /**
             * Field boolValue.
             * @member {boolean} boolValue
             * @memberof structured.StructuredData.Field
             * @instance
             */
            Field.prototype.boolValue = false;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * Field value.
             * @member {"stringValue"|"intValue"|"doubleValue"|"boolValue"|undefined} value
             * @memberof structured.StructuredData.Field
             * @instance
             */
            Object.defineProperty(Field.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["stringValue", "intValue", "doubleValue", "boolValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Field instance using the specified properties.
             * @function create
             * @memberof structured.StructuredData.Field
             * @static
             * @param {structured.StructuredData.IField=} [properties] Properties to set
             * @returns {structured.StructuredData.Field} Field instance
             */
            Field.create = function create(properties) {
                return new Field(properties);
            };

            /**
             * Encodes the specified Field message. Does not implicitly {@link structured.StructuredData.Field.verify|verify} messages.
             * @function encode
             * @memberof structured.StructuredData.Field
             * @static
             * @param {structured.StructuredData.IField} message Field message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Field.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.stringValue);
                if (message.intValue != null && message.hasOwnProperty("intValue"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.intValue);
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.doubleValue);
                if (message.boolValue != null && message.hasOwnProperty("boolValue"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.boolValue);
                return writer;
            };

            /**
             * Encodes the specified Field message, length delimited. Does not implicitly {@link structured.StructuredData.Field.verify|verify} messages.
             * @function encodeDelimited
             * @memberof structured.StructuredData.Field
             * @static
             * @param {structured.StructuredData.IField} message Field message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Field.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Field message from the specified reader or buffer.
             * @function decode
             * @memberof structured.StructuredData.Field
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {structured.StructuredData.Field} Field
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Field.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.structured.StructuredData.Field();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = reader.string();
                        break;
                    case 2:
                        message.stringValue = reader.string();
                        break;
                    case 3:
                        message.intValue = reader.int64();
                        break;
                    case 4:
                        message.doubleValue = reader.double();
                        break;
                    case 5:
                        message.boolValue = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Field message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof structured.StructuredData.Field
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {structured.StructuredData.Field} Field
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Field.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Field message.
             * @function verify
             * @memberof structured.StructuredData.Field
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Field.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    properties.value = 1;
                    if (!$util.isString(message.stringValue))
                        return "stringValue: string expected";
                }
                if (message.intValue != null && message.hasOwnProperty("intValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (!$util.isInteger(message.intValue) && !(message.intValue && $util.isInteger(message.intValue.low) && $util.isInteger(message.intValue.high)))
                        return "intValue: integer|Long expected";
                }
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (typeof message.doubleValue !== "number")
                        return "doubleValue: number expected";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (typeof message.boolValue !== "boolean")
                        return "boolValue: boolean expected";
                }
                return null;
            };

            /**
             * Creates a Field message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof structured.StructuredData.Field
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {structured.StructuredData.Field} Field
             */
            Field.fromObject = function fromObject(object) {
                if (object instanceof $root.structured.StructuredData.Field)
                    return object;
                var message = new $root.structured.StructuredData.Field();
                if (object.key != null)
                    message.key = String(object.key);
                if (object.stringValue != null)
                    message.stringValue = String(object.stringValue);
                if (object.intValue != null)
                    if ($util.Long)
                        (message.intValue = $util.Long.fromValue(object.intValue)).unsigned = false;
                    else if (typeof object.intValue === "string")
                        message.intValue = parseInt(object.intValue, 10);
                    else if (typeof object.intValue === "number")
                        message.intValue = object.intValue;
                    else if (typeof object.intValue === "object")
                        message.intValue = new $util.LongBits(object.intValue.low >>> 0, object.intValue.high >>> 0).toNumber();
                if (object.doubleValue != null)
                    message.doubleValue = Number(object.doubleValue);
                if (object.boolValue != null)
                    message.boolValue = Boolean(object.boolValue);
                return message;
            };

            /**
             * Creates a plain object from a Field message. Also converts values to other types if specified.
             * @function toObject
             * @memberof structured.StructuredData.Field
             * @static
             * @param {structured.StructuredData.Field} message Field
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Field.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.key = "";
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    object.stringValue = message.stringValue;
                    if (options.oneofs)
                        object.value = "stringValue";
                }
                if (message.intValue != null && message.hasOwnProperty("intValue")) {
                    if (typeof message.intValue === "number")
                        object.intValue = options.longs === String ? String(message.intValue) : message.intValue;
                    else
                        object.intValue = options.longs === String ? $util.Long.prototype.toString.call(message.intValue) : options.longs === Number ? new $util.LongBits(message.intValue.low >>> 0, message.intValue.high >>> 0).toNumber() : message.intValue;
                    if (options.oneofs)
                        object.value = "intValue";
                }
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue")) {
                    object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                    if (options.oneofs)
                        object.value = "doubleValue";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    object.boolValue = message.boolValue;
                    if (options.oneofs)
                        object.value = "boolValue";
                }
                return object;
            };

            /**
             * Converts this Field to JSON.
             * @function toJSON
             * @memberof structured.StructuredData.Field
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Field.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Field;
        })();

        return StructuredData;
    })();

    return structured;
})();

module.exports = $root;

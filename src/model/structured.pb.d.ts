import * as $protobuf from "protobufjs";
/** Namespace structured. */
export namespace structured {

    /** Properties of a StructuredData. */
    interface IStructuredData {

        /** StructuredData uid */
        uid?: (string|null);

        /** StructuredData iid */
        iid?: (string|null);

        /** StructuredData pid */
        pid?: (string|null);

        /** StructuredData clientAppId */
        clientAppId?: (string|null);

        /** StructuredData timestamp */
        timestamp?: (number|Long|null);

        /** StructuredData timeZone */
        timeZone?: (string|null);

        /** StructuredData namespace */
        namespace?: (string|null);

        /** StructuredData name */
        name?: (string|null);

        /** StructuredData fieldType */
        fieldType?: (structured.StructuredData.FieldType|null);

        /** StructuredData fields */
        fields?: (structured.StructuredData.IField[]|null);
    }

    /** Represents a StructuredData. */
    class StructuredData implements IStructuredData {

        /**
         * Constructs a new StructuredData.
         * @param [properties] Properties to set
         */
        constructor(properties?: structured.IStructuredData);

        /** StructuredData uid. */
        public uid: string;

        /** StructuredData iid. */
        public iid: string;

        /** StructuredData pid. */
        public pid: string;

        /** StructuredData clientAppId. */
        public clientAppId: string;

        /** StructuredData timestamp. */
        public timestamp: (number|Long);

        /** StructuredData timeZone. */
        public timeZone: string;

        /** StructuredData namespace. */
        public namespace: string;

        /** StructuredData name. */
        public name: string;

        /** StructuredData fieldType. */
        public fieldType: structured.StructuredData.FieldType;

        /** StructuredData fields. */
        public fields: structured.StructuredData.IField[];

        /**
         * Creates a new StructuredData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StructuredData instance
         */
        public static create(properties?: structured.IStructuredData): structured.StructuredData;

        /**
         * Encodes the specified StructuredData message. Does not implicitly {@link structured.StructuredData.verify|verify} messages.
         * @param message StructuredData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: structured.IStructuredData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StructuredData message, length delimited. Does not implicitly {@link structured.StructuredData.verify|verify} messages.
         * @param message StructuredData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: structured.IStructuredData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StructuredData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StructuredData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): structured.StructuredData;

        /**
         * Decodes a StructuredData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StructuredData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): structured.StructuredData;

        /**
         * Verifies a StructuredData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StructuredData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StructuredData
         */
        public static fromObject(object: { [k: string]: any }): structured.StructuredData;

        /**
         * Creates a plain object from a StructuredData message. Also converts values to other types if specified.
         * @param message StructuredData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: structured.StructuredData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StructuredData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace StructuredData {

        /** FieldType enum. */
        enum FieldType {
            FIELD_TYPE_NONE = 0,
            STRING = 1,
            NUMBER = 2,
            BOOL = 3,
            CTR = 4,
            LOCATION = 5,
            DATETIME = 6,
            DURATION = 7,
            TIME_RANGE = 8,
            ENUM = 9,
            URL = 10
        }

        /** Properties of a Field. */
        interface IField {

            /** Field key */
            key?: (string|null);

            /** Field stringValue */
            stringValue?: (string|null);

            /** Field intValue */
            intValue?: (number|Long|null);

            /** Field doubleValue */
            doubleValue?: (number|null);

            /** Field boolValue */
            boolValue?: (boolean|null);
        }

        /** Represents a Field. */
        class Field implements IField {

            /**
             * Constructs a new Field.
             * @param [properties] Properties to set
             */
            constructor(properties?: structured.StructuredData.IField);

            /** Field key. */
            public key: string;

            /** Field stringValue. */
            public stringValue: string;

            /** Field intValue. */
            public intValue: (number|Long);

            /** Field doubleValue. */
            public doubleValue: number;

            /** Field boolValue. */
            public boolValue: boolean;

            /** Field value. */
            public value?: ("stringValue"|"intValue"|"doubleValue"|"boolValue");

            /**
             * Creates a new Field instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Field instance
             */
            public static create(properties?: structured.StructuredData.IField): structured.StructuredData.Field;

            /**
             * Encodes the specified Field message. Does not implicitly {@link structured.StructuredData.Field.verify|verify} messages.
             * @param message Field message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: structured.StructuredData.IField, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Field message, length delimited. Does not implicitly {@link structured.StructuredData.Field.verify|verify} messages.
             * @param message Field message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: structured.StructuredData.IField, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Field message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Field
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): structured.StructuredData.Field;

            /**
             * Decodes a Field message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Field
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): structured.StructuredData.Field;

            /**
             * Verifies a Field message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Field message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Field
             */
            public static fromObject(object: { [k: string]: any }): structured.StructuredData.Field;

            /**
             * Creates a plain object from a Field message. Also converts values to other types if specified.
             * @param message Field
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: structured.StructuredData.Field, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Field to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

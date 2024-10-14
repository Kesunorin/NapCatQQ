import BaseAction from '../BaseAction';
import { ActionName } from '../types';
import { FromSchema, JSONSchema } from 'json-schema-to-ts';
// no_cache get时传字符串
const SchemaData = {
    type: 'object',
    properties: {
        group_id: { type: ['number', 'string'] },
        user_id: { type: ['number', 'string'] },
    },
    required: ['group_id', 'user_id'],
} as const satisfies JSONSchema;

type Payload = FromSchema<typeof SchemaData>;

export class GroupPoke extends BaseAction<Payload, any> {
    actionName = ActionName.GroupPoke;
    payloadSchema = SchemaData;

    async _handle(payload: Payload) {
        if (!this.core.apis.PacketApi.packetClient?.available) {
            throw new Error('packetClient is not init');
        }
        await this.core.apis.PacketApi.sendPokePacket(+payload.group_id, +payload.user_id);
    }
}

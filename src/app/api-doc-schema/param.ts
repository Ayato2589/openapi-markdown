export type Param = {
    name: string;
    type: 'int' | 'string' | 'date';
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    regExpPattern?: string;
    description?: string;
    example?: string;
};

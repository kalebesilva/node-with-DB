import {Model, DataTypes} from "sequelize";
import {sequelize} from "../instances/mysql";
import { toDefaultValue } from "sequelize/types/utils";

// Dizendo pro TS sobre o User
export interface UserInstance extends Model{
    id: number,
    name: string,
    age: number;
}

// Dizendo pro sequelize sobre o User

export const User = sequelize.define<UserInstance>("User", {
    id:{
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    name: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18
    }
}, {
    tableName: "user",
    timestamps: false
})
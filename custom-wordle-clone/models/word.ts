import { DataTypes } from "sequelize";
import { sequelize } from "@/lib/dbConfig";


const Word = sequelize.define("Word", {
  wordId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "users",
      key: "userId",
    }
  },
  word: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: "words",
  timestamps: true,
});

export default Word;
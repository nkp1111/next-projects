import { DataTypes } from "sequelize";
import { sequelize } from "@/lib/dbConfig";


const User = sequelize.define("User", {
  userId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gamePlayedNum: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  gameWon: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  guessDistribution: {
    type: DataTypes.JSON,
    defaultValue: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
  },
}, {
  tableName: "users",
  timestamps: true,
});

export default User;
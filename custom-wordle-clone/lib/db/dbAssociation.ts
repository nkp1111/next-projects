import User from "@/models/user";
import Word from "@/models/word";


export default function dbAssociation() {
  User.hasMany(Word, {
    foreignKey: "userId",
  });
  Word.belongsTo(User, {
    foreignKey: "userId",
  });
  return
}

const user = {
  name: "山田花子",
  bio: "JavaScriptでWebアプリを作っています。",
  settings: {
    isNotificationsEnabled: true,
    language: "日本語",
  },
};

document.write(user.settings.language); // 日本語
user.settings.language = "English";
document.write(user.settings.language); // English

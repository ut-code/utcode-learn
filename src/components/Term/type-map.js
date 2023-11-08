/* 
-----  Memo  -------
  # term の追加
> 文字列そのままの Term しか match しないので、
  説明的な Term は対応していません。
  例: "演算子の優先順位"、"Truthy と Falsy"

> 名前の同じ Term は、使用頻度の高そうな方を優先してください。
  例: "プロパティ" -> "jsProperty"

> 英数字と日本語の間は半角を入れることになっているので、
  半角が入っているもののみを記述してください。
  例: 〇 "HTML 要素"  × "HTML要素"
  

  # 使い方
> Mapとして保存されています。 Map#get を使ってください
  例: const type = typeMap.get(termAsJapaneseString); // ./index.jsx

> 説明的な Term (Truthy と Falsy　など) や
  名前の同じ Term (CSS のプロパティ -> JS のプロパティとして解釈する)
  などは対応していないので、term を明示してください。
  例: CSS の<Term type="cssProperty">プロパティ</Term> // /docs/
*/

const typeMap = new Map([
  ["拡張子", "fileExtension"],
  ["フォーク", "fork"],
  ["Git", "git"],
  ["GitHub", "github"],
  ["Gitpod", "gitpod"],
  ["リポジトリ", "repository"],
  ["HTML", "html"],
  ["JavaScript", "javascript"],
  ["開始タグ", "startTag"],
  ["タグ", "tag"],
  ["属性", "attribute"],
  ["HTML 要素", "element"],
  ["要素", "element"],
  ["終了タグ", "endTag"],
  ["CSS", "css"],
  ["style 属性", "styleAttribute"],
  ["文", "javascriptStatement"],
  ["値", "javascriptValue"],
  ["文字列", "javascriptString"],
  ["演算子", "javascriptOperator"],
  ["式", "javascriptExpression"],
  ["評価", "javascriptEvaluation"],
  ["変数", "javascriptVariable"],
  ["宣言", "javascriptDeclaration"],
  ["代入", "javascriptAssignment"],
  ["キャメルケース", "camelCase"],
  ["スネークケース", "snakeCase"],
  ["パスカルケース", "pascalCase"],
  ["真偽値", "javascriptBoolean"],
  ["if 文", "javascriptIfStatement"],
  ["制御構造", "javascriptControlFlow"],
  ["関数", "javascriptFunction"],
  ["引数", "javascriptParameter"],
  ["渡す", "javascriptPass"],
  ["戻り値", "javascriptReturnValue"],
  ["返す", "javascriptReturn"],
  ["スコープ", "javascriptScope"],
  ["モジュール化", "javascriptModularization"],
  ["オブジェクト", "javascriptObject"],
  ["プリミティブ", "javascriptPrimitive"],
  ["プロパティ", "javascriptProperty"],
  ["DOM", "dom"],
  ["イベント", "events"],
  ["イベントハンドラ", "eventHandler"],
  ["参照", "javascriptReference"],
  ["副作用", "javascriptSideEffects"],
  ["純粋関数", "javascriptPureFunction"],
  ["参照透過性", "javascriptReferenceTransparency"],
  ["クラス", "javascriptClass"],
  ["インスタンス", "javascriptInstance"],
  ["コンストラクタ", "javascriptConstructor"],
  ["メソッド", "javascriptMethod"],
  ["アロー関数", "arrowFunction"],
  ["コールバック関数", "callBackFunction"],
  ["モジュール", "javascriptModule"],
  ["ライブラリ", "library"],
  ["JSON", "json"],
  ["クエリ文字列", "queryString"],
  ["npx コマンド", "npxCommand"],
  ["非同期処理", "asynchronousProcess"],
  ["API", "api"],
  ["スレッド", "thread"],
  ["トランスパイル", "transpile"],
  ["モジュールバンドラ", "moduleBundler"],
  ["JSX", "jsx"],
]);

export default typeMap;

/* for later use // no-more-meaningless-javascript
const typeMap = new Map([
  ["拡張子", "fileExtension"],
  ["フォーク", "fork"],
  ["Git", "git"],
  ["GitHub", "github"],
  ["Gitpod", "gitpod"],
  ["リポジトリ", "repository"],
  ["HTML", "html"],
  ["JavaScript", "javascript"],
  ["開始タグ", "startTag"],
  ["タグ", "tag"],
  ["属性", "attribute"],
  ["HTML 要素", "element"],
  ["要素", "element"],
  ["終了タグ", "endTag"],
  ["CSS", "css"],
  ["style 属性", "styleAttribute"],
  ["文", "statement"],
  ["値", "value"],
  ["文字列", "string"],
  ["演算子", "operator"],
  ["式", "expression"],
  ["評価", "evaluation"],
  ["変数", "variable"],
  ["宣言", "declaration"],
  ["代入", "assignment"],
  ["キャメルケース", "camelCase"],
  ["スネークケース", "snakeCase"],
  ["パスカルケース", "pascalCase"],
  ["真偽値", "bool"],
  ["if 文", "ifStatement"],
  ["制御構造", "controlFlow"],
  ["関数", "function"],
  ["引数", "parameter"],
  ["渡す", "pass"],
  ["戻り値", "returnValue"],
  ["返す", "return"],
  ["スコープ", "scope"],
  ["モジュール化", "modularization"],
  ["オブジェクト", "object"],
  ["プリミティブ", "primitive"],
  ["プロパティ", "property"],
  ["DOM", "dom"],
  ["イベント", "events"],
  ["イベントハンドラ", "eventHandler"],
  ["参照", "reference"],
  ["副作用", "sideEffects"],
  ["純粋関数", "pureFunction"],
  ["参照透過性", "referenceTransparency"],
  ["クラス", "class"],
  ["インスタンス", "instance"],
  ["コンストラクタ", "constructor"],
  ["メソッド", "method"],
  ["アロー関数", "arrowFunction"],
  ["コールバック関数", "callBackFunction"],
  ["モジュール", "module"],
  ["ライブラリ", "library"],
  ["JSON", "json"],
  ["クエリ文字列", "queryString"],
  ["npx コマンド", "npxCommand"],
  ["非同期処理", "asyncProcess"],
  ["API", "api"],
  ["スレッド", "thread"],
  ["トランスパイル", "transpile"],
  ["モジュールバンドラ", "moduleBundler"],
  ["JSX", "jsx"],
]);
*/

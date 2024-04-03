/*
 * # term の追加
 * > 文字列そのままの Term しか match しないので、
 *   説明的な Term は対応していません。
 *   例: "演算子の優先順位"
 *
 * > 名前の同じ Term は、使用頻度の高そうな方を優先してください。
 *   例: "プロパティ" -> "javascriptProperty"
 *       "メソッド" -> "jsMethod"
 *
 * > 英数字と日本語の間は半角スペースを入れることになっているので、
 *   半角が入っているもののみを記述してください。
 *   例: 〇 "HTML 要素"  × "HTML要素"
 *
 *
 * # 使い方
 * > 説明的な Term (演算子の優先順位 など) や、
 *   名前の同じ Term (CSS のプロパティ -> JS のプロパティとして解釈する)
 *   などは対応していないので、term を明示してください。
 *   例: CSS の<Term type="cssProperty">プロパティ</Term> // /docs/
 *
 */

const typeMap = new Map([
  ["拡張子", "fileExtension"],
  ["フォーク", "fork"], // not found
  ["Git", "git"], // not found
  ["GitHub", "github"], // not found
  ["Gitpod", "gitpod"], // not found
  ["リポジトリ", "repository"], // not found
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
  ["数値", "javascriptNumber"],
  ["演算子", "javascriptOperator"],
  ["式", "javascriptExpression"],
  ["評価", "javascriptEvaluation"],
  ["変数", "javascriptVariable"],
  ["宣言", "javascriptDeclaration"],
  ["代入", "javascriptAssignment"],
  ["キャメルケース", "camelCase"],
  ["スネークケース", "snakeCase"],
  ["パスカルケース", "pascalCase"],
  ["論理値", "javascriptBoolean"],
  ["if 文", "javascriptIfStatement"],
  ["制御構造", "javascriptControlFlow"],
  ["制御構文", "javascriptControlFlow"], // ここ 1-1 (Term以外では8-2) でした。とりあえず両方対応させます
  ["関数", "javascriptFunction"],
  ["引数", "javascriptParameter"],
  ["渡す", "javascriptPass"],
  ["戻り値", "javascriptReturnValue"],
  ["返す", "javascriptReturn"],
  ["返し", "javascriptReturn"],
  ["スコープ", "javascriptScope"],
  ["モジュール化", "javascriptModularization"],
  ["オブジェクト", "javascriptObject"],
  ["プリミティブ", "javascriptPrimitive"],
  ["プロパティ", "javascriptProperty"],
  ["DOM", "dom"],
  ["イベント", "events"],
  ["イベントハンドラ", "eventHandler"],
  ["クラス", "javascriptClass"],
  ["インスタンス", "javascriptInstance"],
  ["コンストラクタ", "javascriptConstructor"],
  ["メソッド", "javascriptMethod"],
  ["アロー関数", "arrowFunction"],
  ["コールバック関数", "callbackFunction"],
  ["モジュール", "javascriptModule"],
  ["ライブラリ", "library"],
  ["サーバー", "serverClient"],
  ["クライアント", "serverClient"],
  ["JSON", "json"],
  ["HTTP リクエスト", "requestResponse"],
  ["リクエスト", "requestResponse"],
  ["レスポンス", "requestResponse"],
  ["クエリ文字列", "queryString"],
  ["クエリパラメータ", "queryString"],
  ["リクエストヘッダ", "httpHeaderBody"],
  ["リクエストボディ", "httpHeaderBody"],
  ["レスポンスボディ", "httpHeaderBody"],
  ["HTTP メソッド", "httpMethod"],
  ["GET リクエスト", "httpMethod"],
  ["POST リクエスト", "httpMethod"],
  ["npx コマンド", "npxCommand"],
  ["非同期処理", "asynchronousProcess"],
  ["非同期関数", "asynchronousProcess"],
  ["API", "api"],
  ["スレッド", "thread"], // not found
  ["トランスパイル", "transpile"],
  ["トランスパイラ", "transpile"],
  ["モジュールバンドラ", "moduleBundler"],
  ["JSX", "jsx"],
  ["truthy", "javascriptTruthyFalsy"],
  ["falsy", "javascriptTruthyFalsy"],
  ["ミュータブル", "mutableImmutable"],
  ["イミュータブル", "mutableImmutable"],
]);

export default typeMap;

export const referencePageTitles = {
  "/docs/trial-session/get-started/": "はじめてのWeb開発",
  "/docs/trial-session/html/": "HTML",
  "/docs/trial-session/css/": "CSS",
  "/docs/trial-session/javascript/": "JavaScriptことはじめ",
  "/docs/trial-session/expressions/": "値と式と演算子",
  "/docs/trial-session/variables/": "変数",
  "/docs/trial-session/boolean/": "論理値と論理演算子",
  "/docs/trial-session/if-statement/": "条件分岐",
  "/docs/trial-session/functions/": "関数",
  "/docs/trial-session/loop/": "繰り返し",
  "/docs/trial-session/array/": "配列",
  "/docs/trial-session/object/": "オブジェクト",
  "/docs/trial-session/dom/": "DOM",
  "/docs/trial-session/events/": "イベント",
  "/docs/trial-session/project/": "プロジェクト",
  "/docs/trial-session/deploy-application/": "作ったウェブアプリを公開する",
  "/docs/browser-apps/inspector/": "ブラウザの開発者ツール",
  "/docs/browser-apps/reference/": "オブジェクトの参照",
  "/docs/browser-apps/class/": "クラス",
  "/docs/browser-apps/anonymous-function/": "無名関数",
  "/docs/browser-apps/css-arrangement/": "CSSによる配置",
  "/docs/browser-apps/project/": "プロジェクト",
  "/docs/web-servers/wsl-setup/": "WSLのセットアップ",
  "/docs/web-servers/linux-commands/": "Linuxコマンド",
  "/docs/web-servers/node-js/": "はじめてのNode.js",
  "/docs/web-servers/module/": "モジュールとnpm",
  "/docs/web-servers/server/": "Expressによるサーバー構築",
  "/docs/web-servers/fetch-api/": "Fetch APIによるデータの取得",
  "/docs/web-servers/fetch-api-post/": "Fetch APIによるデータの送信",
  "/docs/web-servers/database/": "データベース",
  "/docs/web-servers/git-github-init/": "GitとGitHubのセットアップ",
  "/docs/web-servers/git/": "Gitを用いたバージョン管理",
  "/docs/web-servers/github/": "GitとGitHubを用いた共同開発",
  "/docs/web-servers/deploy-on-render/": "Renderへのデプロイ",
  "/docs/advanced/cookie/": "Cookieと認証",
  "/docs/advanced/bundler/": "トランスパイラとモジュールバンドラ",
  "/docs/advanced/typescript/": "TypeScript",
  "/docs/advanced/react/": "React",
  "/docs/advanced/integration-and-deployment/":
    "フロントエンドとバックエンドの連携とデプロイ",
};

type Term = {
  id: string;
  name: string;
  aliases: string[];
  definition: string;
  referencePage: keyof typeof referencePageTitles;
};

export const terms: Term[] = [
  {
    id: "file-extension",
    name: "拡張子",
    aliases: [],
    definition:
      "ファイル名のピリオド以降の部分。ファイルの種類を識別するために用いられる場合がある。Windowsでは標準では表示されないので、表示する設定にしておくと良い。",
    referencePage: "/docs/trial-session/html/",
  },
  {
    id: "git",
    name: "Git",
    aliases: [],
    definition: "分散型バージョン管理システムのひとつ。",
    referencePage: "/docs/web-servers/git-github-init/",
  },
  {
    id: "github",
    name: "GitHub",
    aliases: [],
    definition:
      "Gitを用いて、プログラムの保存、共有、公開などができる、開発者のための総合プラットフォーム。",
    referencePage: "/docs/web-servers/git-github-init/",
  },
  {
    id: "repository",
    name: "リポジトリ",
    aliases: [],
    definition: "ソースコードやそれに付随する情報のまとまり。",
    referencePage: "/docs/web-servers/git/",
  },
  {
    id: "html",
    name: "HTML",
    aliases: [],
    definition: "ウェブページの構造を表すためのマークアップ言語。",
    referencePage: "/docs/trial-session/html/",
  },
  {
    id: "nest",
    name: "ネスト",
    aliases: [],
    definition: "ある構造の中にある別の構造を入れること。",
    referencePage: "/docs/trial-session/html/",
  },
  {
    id: "javascript",
    name: "JavaScript",
    aliases: [],
    definition:
      "ウェブサイトに動きを与えるために生まれたスクリプト言語。現在は機能が拡張され、ウェブサイト以外にも応用されるようになった。",
    referencePage: "/docs/trial-session/javascript/",
  },
  {
    id: "start-tag",
    name: "開始タグ",
    aliases: [],
    definition:
      "要素の先頭を表す。<div>内容</div>ならば<div>が開始タグ。属性をつけることができる。",
    referencePage: "/docs/trial-session/html/",
  },
  {
    id: "tag",
    name: "タグ",
    aliases: [],
    definition: "<から>までで囲まれた領域。<a>を「aタグ」のように読んでいる。",
    referencePage: "/docs/trial-session/html/",
  },
  {
    id: "attribute",
    name: "属性",
    aliases: [],
    definition: "HTML要素の特徴を指定する値。開始タグの中に含まれる。",
    referencePage: "/docs/trial-session/html/",
  },
  {
    id: "element",
    name: "HTML要素",
    aliases: ["要素"],
    definition: "HTMLの開始タグから終了タグまでの領域。",
    referencePage: "/docs/trial-session/html/",
  },
  {
    id: "end-tag",
    name: "終了タグ",
    aliases: [],
    definition: "要素の終端を表す。<div>内容</div>ならば</div>が終了タグ。",
    referencePage: "/docs/trial-session/html/",
  },
  {
    id: "css",
    name: "CSS",
    aliases: [],
    definition:
      "ウェブサイトの見た目をカスタマイズするための言語。HTML要素のstyle属性はCSSを用いて記述する。",
    referencePage: "/docs/trial-session/css/",
  },
  {
    id: "style-attribute",
    name: "style属性",
    aliases: [],
    definition:
      "表示可能な多くのHTML要素に対して設定できる、見た目をカスタマイズするための属性。",
    referencePage: "/docs/trial-session/css/",
  },
  {
    id: "css-property",
    name: "プロパティ (CSS)",
    aliases: [],
    definition:
      "CSSにより設定できる見た目の種類。例えばcolorは文字色、font-sizeは文字の大きさ。",
    referencePage: "/docs/trial-session/css/",
  },
  {
    id: "javascript-statement",
    name: "文",
    aliases: [],
    definition:
      "JavaScriptにおいて、セミコロンによって区切られた命令の単位。ただしセミコロンは省略可能。",
    referencePage: "/docs/trial-session/javascript/",
  },
  {
    id: "javascript-value",
    name: "値 (JavaScript)",
    aliases: ["値"],
    definition:
      "JavaScript上で扱われる単一のデータ。数値や文字列、論理値、オブジェクトなど。",
    referencePage: "/docs/trial-session/expressions/",
  },
  {
    id: "javascript-string",
    name: "文字列 (JavaScript)",
    aliases: ["文字列"],
    definition:
      "JavaScriptにおける値の一種。ダブルクォーテーションで囲んでプログラム上に直接記述できる。",
    referencePage: "/docs/trial-session/expressions/",
  },
  {
    id: "javascript-number",
    name: "数値 (JavaScript)",
    aliases: ["数値"],
    definition: "JavaScriptにおける値の一種。プログラム中に直接記述できる。",
    referencePage: "/docs/trial-session/expressions/",
  },
  {
    id: "javascript-operator",
    name: "演算子 (JavaScript)",
    aliases: ["演算子"],
    definition:
      "JavaScriptにおいて、主に値に対して作用し、別の値を得るための記号。",
    referencePage: "/docs/trial-session/expressions/",
  },
  {
    id: "javascript-expression",
    name: "式 (JavaScript)",
    aliases: ["式"],
    definition: "JavaScriptにおいて、計算・処理されて値を生成するまとまり。",
    referencePage: "/docs/trial-session/expressions/",
  },
  {
    id: "javascript-evaluation",
    name: "評価 (JavaScript)",
    aliases: ["評価"],
    definition: "JavaScriptの実行エンジンが式から値を生成する動作。",
    referencePage: "/docs/trial-session/expressions/",
  },
  {
    id: "javascript-operator-priority",
    name: "演算子の優先順位 (JavaScript)",
    aliases: [],
    definition:
      "複数の演算子を含む式の評価順序を決定するための指標。例えば、乗算演算子は加算演算子より優先順位が高いため、3 + 4 * 5は3 + (4 * 5)と評価される。",
    referencePage: "/docs/trial-session/expressions/",
  },
  {
    id: "javascript-variable",
    name: "変数",
    aliases: [],
    definition: "JavaScriptで値を一時的に保存しておくための入れ物。",
    referencePage: "/docs/trial-session/variables/",
  },
  {
    id: "javascript-declaration",
    name: "宣言 (JavaScript)",
    aliases: ["宣言"],
    definition: "JavaScriptで変数を使用するために必要な記述。",
    referencePage: "/docs/trial-session/variables/",
  },
  {
    id: "javascript-assignment",
    name: "代入 (JavaScript)",
    aliases: ["代入"],
    definition: "変数に値を設定する操作。それまで入っていた値は消えてしまう。",
    referencePage: "/docs/trial-session/variables/",
  },
  {
    id: "camel-case",
    name: "キャメルケース",
    aliases: [],
    definition:
      "複数の単語にわたるフレーズを、2語目以降の先頭の文字を大文字にして結合する命名規則。例: camelCase",
    referencePage: "/docs/trial-session/variables/",
  },
  {
    id: "snake-case",
    name: "スネークケース",
    aliases: [],
    definition:
      "複数の単語にわたるフレーズを、アンダーバー (_) によって結合する命名規則。例: snake_case",
    referencePage: "/docs/trial-session/variables/",
  },
  {
    id: "pascal-case",
    name: "パスカルケース",
    aliases: [],
    definition:
      "複数の単語にわたるフレーズを、それぞれの単語の先頭の文字を大文字にして結合する命名規則。例: PascalCase",
    referencePage: "/docs/trial-session/variables/",
  },
  {
    id: "javascript-boolean",
    name: "論理値 (JavaScript)",
    aliases: ["論理値"],
    definition:
      "JavaScriptにおける値の一種で、真偽を表すもの。trueまたはfalseの2種類しかない。",
    referencePage: "/docs/trial-session/boolean/",
  },
  {
    id: "javascript-if-statement",
    name: "if文",
    aliases: [],
    definition:
      "与えられた真偽値が真である場合のみ{}ブロックの中の処理を実行する制御構造。",
    referencePage: "/docs/trial-session/if-statement/",
  },
  {
    id: "javascript-control-flow",
    name: "制御構造 (JavaScript)",
    aliases: ["制御構造", "制御構文"],
    definition:
      "JavaScriptにおいて、通常上から下に実行される文の実行順序を変化させるための言語構造。",
    referencePage: "/docs/trial-session/if-statement/",
  },
  {
    id: "javascript-function",
    name: "関数 (JavaScript)",
    aliases: ["関数"],
    definition: "引数や返り値を持つ文のまとまり。",
    referencePage: "/docs/trial-session/functions/",
  },
  {
    id: "javascript-parameter",
    name: "引数 (JavaScript)",
    aliases: ["引数"],
    definition: "JavaScriptの関数に対し、呼び出し時に与えることのできる値。",
    referencePage: "/docs/trial-session/functions/",
  },
  {
    id: "javascript-pass",
    name: "～ (値) を～ (関数) に渡す",
    aliases: ["渡す"],
    definition: "JavaScriptの関数に値を引数として設定して実行すること。",
    referencePage: "/docs/trial-session/functions/",
  },
  {
    id: "javascript-return-value",
    name: "戻り値 (JavaScript)",
    aliases: ["戻り値"],
    definition: "JavaScriptの関数呼び出し式の評価結果となる値。",
    referencePage: "/docs/trial-session/functions/",
  },
  {
    id: "javascript-return",
    name: "～ (値) を返す (JavaScript)",
    aliases: ["返す", "返し"],
    definition:
      "関数の実行が終了し、式の評価結果の値が確定すること。return文により実現できる。",
    referencePage: "/docs/trial-session/functions/",
  },
  {
    id: "javascript-scope",
    name: "スコープ (JavaScript)",
    aliases: ["スコープ"],
    definition: "変数が有効な範囲。",
    referencePage: "/docs/trial-session/functions/",
  },
  {
    id: "javascript-array",
    name: "配列 (JavaScript)",
    aliases: ["配列"],
    definition: "複数の値を並べて1つにまとめた値。",
    referencePage: "/docs/trial-session/array/",
  },
  {
    id: "javascript-object",
    name: "オブジェクト (JavaScript)",
    aliases: ["オブジェクト"],
    definition:
      "JavaScriptにおける値の一種。関連する値をまとめて1つの値として扱うことができる。プリミティブでない値はすべてオブジェクト。",
    referencePage: "/docs/trial-session/object/",
  },
  {
    id: "javascript-primitive",
    name: "プリミティブ (JavaScript)",
    aliases: ["プリミティブ"],
    definition:
      "JavaScriptにおける値の種類。数値や文字列、論理値などの「それ以上分解できない」値。",
    referencePage: "/docs/trial-session/object/",
  },
  {
    id: "javascript-property",
    name: "プロパティ (JavaScript)",
    aliases: ["プロパティ"],
    definition:
      "JavaScriptのオブジェクトに関連付けられた属性のこと。学生を表すオブジェクトであれば、名前や年齢などのプロパティが考えられる。",
    referencePage: "/docs/trial-session/object/",
  },
  {
    id: "javascript-property-name",
    name: "プロパティ名 (JavaScript)",
    aliases: ["プロパティ名"],
    definition:
      "JavaScriptのオブジェクトにおいて、プロパティを表す名前のこと。",
    referencePage: "/docs/trial-session/object/",
  },
  {
    id: "javascript-property-value",
    name: "プロパティ値 (JavaScript)",
    aliases: ["プロパティ値"],
    definition:
      "JavaScriptのオブジェクトにおいて、プロパティに関連付けられた値のこと。",
    referencePage: "/docs/trial-session/object/",
  },
  {
    id: "dom",
    name: "DOM",
    aliases: [],
    definition: "HTML構造をJavaScriptのオブジェクトとして扱うための枠組み。",
    referencePage: "/docs/trial-session/dom/",
  },
  {
    id: "events",
    name: "イベント",
    aliases: [],
    definition:
      "ボタンのクリック、フォームへの入力、ページの読み込みなど、Webページ上で発生するあらゆるアクションの総称。",
    referencePage: "/docs/trial-session/events/",
  },
  {
    id: "event-handler",
    name: "イベントハンドラ",
    aliases: [],
    definition:
      "イベント発生時の処理を行う仕組み。onclick関数、onload関数など、onキーワードにイベント名をつけた名称になっている。",
    referencePage: "/docs/trial-session/events/",
  },
  {
    id: "javascript-class",
    name: "クラス (JavaScript)",
    aliases: ["クラス"],
    definition:
      "同じプロパティを持つオブジェクトを統一的に扱うための仕組み。プロパティや関数(メソッド)を予め設定できる。",
    referencePage: "/docs/browser-apps/class/",
  },
  {
    id: "javascript-instance",
    name: "インスタンス (JavaScript)",
    aliases: ["インスタンス"],
    definition: "new演算子をクラスに適用して生成されるオブジェクトのこと。",
    referencePage: "/docs/browser-apps/class/",
  },
  {
    id: "javascript-constructor",
    name: "コンストラクタ (JavaScript)",
    aliases: ["コンストラクタ"],
    definition:
      "インスタンスを作成するタイミング（new演算子をクラスに適用するタイミング）で実行される特殊なメソッド。constructorという名前で定義する必要がある。コンストラクタを定義すると、インスタンスを生成するときにプロパティの設定も同時に行うことができる。",
    referencePage: "/docs/browser-apps/class/",
  },
  {
    id: "javascript-method",
    name: "メソッド (JavaScript)",
    aliases: ["メソッド"],
    definition:
      "オブジェクトに対して定義された関数。メソッド内ではメソッドが定義されたオブジェクトをthisキーワードを用いて参照できる。",
    referencePage: "/docs/browser-apps/class/",
  },
  {
    id: "arrow-function",
    name: "アロー関数",
    aliases: [],
    definition:
      "JavaScriptにおいて関数を生成するための式のひとつ。=>という記号が矢のように見えることから命名された。",
    referencePage: "/docs/browser-apps/anonymous-function/",
  },
  {
    id: "callback-function",
    name: "コールバック関数",
    aliases: [],
    definition: "他の関数の引数として呼び出される関数。",
    referencePage: "/docs/browser-apps/anonymous-function/",
  },
  {
    id: "javascript-module",
    name: "モジュール (JavaScript)",
    aliases: ["モジュール"],
    definition:
      "独立したプログラムの塊。JavaScriptでは、通常1つのファイルがモジュールとして扱われる。Node.jsでは、import文を用いてインポートして利用することができる。",
    referencePage: "/docs/web-servers/module/",
  },
  {
    id: "library",
    name: "ライブラリ",
    aliases: [],
    definition:
      "汎用性の高い複数のプログラムを再利用可能な形でひとまとまりにしたもの。基本的に他のプログラムから利用され、単体では実行できない。",
    referencePage: "/docs/web-servers/module/",
  },
  {
    id: "server-client",
    name: "サーバーとクライアント",
    aliases: ["サーバー", "クライアント"],
    definition:
      "サービスを提供する側のコンピューターやソフトウェアをサーバー、提供される側のコンピューターやソフトウェアをクライアントと呼ぶ。例えばGoogle ChromeなどのWebブラウザは、Webにおける代表的なクライアントソフトウェアである。",
    referencePage: "/docs/web-servers/server/",
  },
  {
    id: "json",
    name: "JSON",
    aliases: [],
    definition:
      "複雑なデータ構造をJavaScriptオブジェクトに似た形式で文字列として表現するための記法。",
    referencePage: "/docs/web-servers/fetch-api/",
  },
  {
    id: "request-response",
    name: "リクエストとレスポンス",
    aliases: ["HTTPリクエスト", "リクエスト", "レスポンス"],
    definition:
      "クライアントからサーバーに対しサービスを要求する通信をリクエスト、リクエストに対してサーバーからクライアントに応答として返される通信をレスポンスと呼ぶ。",
    referencePage: "/docs/web-servers/server/",
  },
  {
    id: "http-header-body",
    name: "リクエスト・レスポンスのヘッダ・ボディ (HTTP)",
    aliases: ["リクエストヘッダ", "リクエストボディ", "レスポンスボディ"],
    definition:
      "HTTPにおいてリクエストやレスポンスは主にヘッダと呼ばれる領域とボディと呼ばれる領域に分かれている。リクエストやレスポンスの本体はボディの部分に格納されており、ヘッダは付加的な情報を与えるために用いられる。なお、GETリクエストではリクエストボディを使用できない。",
    referencePage: "/docs/web-servers/fetch-api-post/",
  },
  {
    id: "http-method",
    name: "メソッド (HTTP)",
    aliases: ["GETリクエスト", "POSTリクエスト"],
    definition:
      "HTTPリクエストの種類。GETやPOSTなどがある。GETリクエストではリクエストボディを利用できないが、POSTリクエストでは利用できるなどの違いがある。",
    referencePage: "/docs/web-servers/fetch-api-post/",
  },
  {
    id: "http-status-code",
    name: "ステータスコード (HTTP)",
    aliases: ["ステータスコード"],
    definition:
      "HTTPレスポンスに含まれる、リクエストの処理結果を表す3桁の数値。200番台は成功、400番台はクライアント側の問題での失敗、500番台はサーバー側の問題での失敗を表す。代表的なものに200 (OK)、201 (Created)、400 (Bad Request)、401 (Unauthorized)、404 (Not Found)、500 (Internal Server Error)がある。",
    referencePage: "/docs/web-servers/fetch-api-post/",
  },
  {
    id: "npx-command",
    name: "npxコマンド",
    aliases: [],
    definition:
      "npm付属のコマンド。インストールしたnpmパッケージを直接実行する機能を持つ。",
    referencePage: "/docs/web-servers/database/",
  },
  {
    id: "asynchronous-process",
    name: "非同期処理",
    aliases: ["非同期関数"],
    definition:
      "処理を実行する際、その完了を待たずに呼び出し元の処理が続行されるような処理。JavaScriptでは、asyncキーワードをつけた関数は非同期処理を行うための関数となり、内部ではawaitキーワードにより他の非同期処理を呼び出してその結果を待機できるようになる。",
    referencePage: "/docs/web-servers/fetch-api/",
  },
  {
    id: "environment-variable",
    name: "環境変数",
    aliases: [],
    definition:
      "アプリケーションの実行時に、アプリケーション自体を変更することなく外側から動作を変更するために用いることができる仕組み。キーと値の組み合わせによって定義される。",
    referencePage: "/docs/web-servers/database/",
  },
  {
    id: "deploy",
    name: "デプロイ",
    aliases: [],
    definition:
      "開発したプログラムを実行可能な状態にして、実際に利用できるようにすること。Webアプリケーションの場合、サーバーにプログラムを配置して、インターネット上でアクセスできるようにすることを指す。",
    referencePage: "/docs/web-servers/deploy-on-render/",
  },
  {
    id: "transpile",
    name: "トランスパイル",
    aliases: ["トランスパイラ"],
    definition:
      "プログラムを同じ意味を持つ別のプログラムへと変換すること。Web開発では、通常変換の結果ウェブブラウザが解釈できるJavaScriptが生成される。Babelが有名。",
    referencePage: "/docs/advanced/bundler/",
  },
  {
    id: "module-bundler",
    name: "モジュールバンドラ",
    aliases: [],
    definition:
      "複数のJavaScriptモジュールをまとめてひとつにするためのソフトウェア。webpackが有名。",
    referencePage: "/docs/advanced/bundler/",
  },
  {
    id: "build",
    name: "ビルド",
    aliases: [],
    definition:
      "開発したプログラムを実行可能な形式に変換・最適化し、最終成果物を生成する一連の処理。フロントエンド開発では、トランスパイルやバンドルなどにより必要な変換や最適化を施し、配信可能な最終成果物を生成することを指す。",
    referencePage: "/docs/advanced/bundler/",
    // 参考：
    // - Wikipedia「ビルド (ソフトウェア)」 https://ja.wikipedia.org/wiki/ビルド_(ソフトウェア)
    // - Vite公式「本番環境用のビルド」 https://ja.vite.dev/guide/build
  },
  {
    id: "jsx",
    name: "JSX",
    aliases: [],
    definition:
      "JavaScriptの拡張構文で、Reactなどと共に用いられる。JSXが有効なJavaScriptでは、HTMLに似た構文の式により特定の種類のオブジェクトを作成できる。拡張子は.jsxで、TypeScriptとともに用いる場合は.tsx。",
    referencePage: "/docs/advanced/react/",
  },
  {
    id: "javascript-truthy-falsy",
    name: "truthyとfalsy (JavaScript)",
    aliases: ["truthy", "falsy"],
    definition:
      "JavaScriptでは、数値のゼロ、空文字列、null、undefined、NaNをfalsy、それ以外の全ての値をtruthyとみなす。if文は条件式の結果がtruthyであるかfalsyであるかによって分岐を行う。",
    referencePage: "/docs/advanced/react/",
  },
  {
    id: "mutable-immutable",
    name: "ミュータブルとイミュータブル",
    aliases: ["ミュータブル", "イミュータブル"],
    definition:
      "オブジェクトの内部が変更可能であるとき、そのオブジェクトはミュータブルであるといい、変更不能である場合はイミュータブルであるという。Reactなどのライブラリでは状態を表すオブジェクトはイミュータブルであることが求められる。これは、状態が変化する際に参照も変化することを保証するためである。",
    referencePage: "/docs/browser-apps/reference/",
  },
  {
    id: "typescript-execute",
    name: "tsx（TypeScript Execute）",
    aliases: ["tsxパッケージ"],
    definition:
      "Node.js環境で事前にTypeScriptをJavaScriptにトランスパイルせずにTypeScriptファイルを実行するためのツール。`npx tsx 実行するファイルのパス`とすることで、TypeScriptファイルを実行できる。",
    referencePage: "/docs/advanced/integration-and-deployment/",
    // 参考：tsx公式 https://tsx.is/
  },
  {
    id: "origin",
    name: "オリジン",
    aliases: [],
    definition: "プロトコル、ドメイン、ポートの組み合わせ。",
    referencePage: "/docs/advanced/integration-and-deployment/",
    // 参考：MDN「Origin (オリジン)」 https://developer.mozilla.org/ja/docs/Glossary/Origin
  },
  {
    id: "cors",
    name: "CORS（Cross-Origin Resource Sharing）",
    aliases: ["CORS"],
    definition:
      "セキュリティ上の理由からブラウザによって制限されている異なるオリジンのリソースへのアクセスを必要に応じて可能にする仕組み。サーバーがHTTPレスポンスヘッダに特定のヘッダを含めることで、ブラウザはそのアクセスを許可する。",
    referencePage: "/docs/advanced/integration-and-deployment/",
    // 参考：MDN「オリジン間リソース共有 (CORS)」 https://developer.mozilla.org/ja/docs/Web/HTTP/Guides/CORS
  },
];

module.exports = {
    // エントリーポイントの設定
    // webpackがビルドを開始する際の起点となるファイル
    entry: {
        bundle: "./src/index.ts",
    },
    // 出力に関する設定
    output: {
        path: `${__dirname}/dist`, // 出力されるファイルが置かれるディレクトリのパス
        filename: "bundle.js", // 出力されるファイルの名前
    },
    // ビルドモードの設定
    // "development"は開発用で、ソースマップ有効化や未圧縮出力など
    // "production" にするとbundle.jsが圧縮された記述で出力され、最適化される
    mode: "development",
    // 解決(Resolve)の設定
    // インポートされるモジュールの拡張子を解決するための設定
    resolve: {
        extensions: [".ts", ".js"], // .tsまたは.jsを拡張子として解決
    },
    // 開発サーバー(devServer)の設定
    devServer: {
        static: {
            directory: `${__dirname}/dist`, // 静的ファイルを提供するディレクトリ
        },
        open: true, // ビルド後にブラウザを自動で開く
    },
    // モジュールに関する設定
    module: {
        rules: [
            {
                test: /\.ts$/, // .ts拡張子を持つファイルに対する正規表現
                loader: "ts-loader", // ts-loaderを使用してTypeScriptをJavaScriptに変換
            }
        ]
    }
}

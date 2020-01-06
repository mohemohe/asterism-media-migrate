asterism-media-migrate
====

mstdn.asterism.xyz向けに作ったものですが、別にそれ以外にも使えます

## 環境変数

| key | desc. |
| - | - |
| HOST | 接続するPostgreSQLのホスト |
| USER | ユーザー名 |
| PASSWORD | パスワード |
| DATABASE | 接続先データベース |
| SSL | "true" でSSL接続する |
| FROM | 書き換え対象の部分文字列 |
| TO | 書き換え先の部分文字列 |

## 使い方

```sh
yarn install
```

してから、

```sh
HOST=XXX USER=mastodon PASSWORD=YYY DATABASE=mastodon SSL=true FROM=https://s3-ap-northeast-1.amazonaws.com/mastodon-asterism TO=https://media-mstdn.asterism.xyz ts-node index.ts
```

または

```sh
env $(cat .env) ts-node index.ts
```

## ライセンス

WTFPL
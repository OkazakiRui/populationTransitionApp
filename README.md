# 都道府県別の総人口推移グラフを表示するアプリ

## 内容

1. RESAS(地域経済分析システム) APIの「都道府県一覧」からAPIを取得する
2. APIレスポンスから都道府県一覧のチェックボックスを動的に生成する
3. 都道府県にチェックを入れると、RESAS APIから選択された都道府県の「人口構成」を取得する
4. 人口構成APIレスポンスから、X軸:年、Y軸:人口数の折れ線グラフを動的に生成して表示する

## 環境構築

### node_module をインストール

```
yarn
```

### 環境変数を作成

```
vi .env
```

```.env
REACT_APP_ENDPOINT= URL を入れる
REACT_APP_API_KEY= apiKey を入れる
```

### ローカルサーバーを立てる

```
yarn start
```

### build する

```
yarn build
```

### test する

```
yarn test
```

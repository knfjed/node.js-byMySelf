# Node.js 　学習のメモ

### 用語の説明

①URL に対応する処理を実行することをルーティングという</br>
② ブラウザに表示する見た目部分には EJS という形式のファイルを使い、views フォルダに配置する。</br>
（見た目を作るファイルをビューファイルと呼ぶ）</br>
ルーティングの処理で res.render と書くことで、指定したビューファイルをブラウザに表示できる。

### コマンド

control + c → コマンド終了</br>
参考：</br>
https://qiita.com/ryouzi/items/f9dee1540a04a0bfb9a3</br>
https://eng-entrance.com/linux-command-mkdir</br>

req → リクエスト</br>
res → レスポンス</br>

### EJS とは

Embedded Java Script
EJS は、HTML と JavaScript のコード両方を記述できる Node.js のパッケージのこと。
HTML の中に js を埋め込む（=Embedded）ことができる。
npm からインストールして使う。

### EJS を使った値の表示

JavaScript のコードを記述するには、<% %>または<%= %>で囲う。
<% %>で囲んだ場合はブラウザに何も表示されないので、変数の定義などに用いる。
変数の値などをブラウザに表示したい場合は<%= %>を用いる。

# ルート URL

「/」の URL をルート URL と言う。
一番初めにアクセスするページはルート URL に設定することが一般的。

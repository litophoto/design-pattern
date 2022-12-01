# Builder design pattern

## 生成に関するクラス

家を作成するクラスを考える
家の要素として考えられるものはGarage, FancyStatures, Gardenなどの追加要素が考えられる
この場合単純な解決策として
1. それぞれのサブクラスを作成する(HouseWithGarage, HouseWithFancyStatures, HouseWithGarden)
2. それぞれの要素を引数にする(House(garage, fancyStatures, garden))

などが考えられるが、どちらも規模が大きくなった時に管理が難しい

## 解決策
**HouseBuilder**
def buildGarage()
def buildFancyStatures()
def buildGarden()
def getResult(): House

上記のようなクラスによって、作成(Build)を集約する

### Director

複数のBuilderを統括するDirectorクラスをオプションで作成しても良い
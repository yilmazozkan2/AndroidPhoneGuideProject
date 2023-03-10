import { FlatList, StyleSheet, ScrollView, View, Image, Dimensions, StatusBar } from "react-native";
import InfCard from "../Components/Card/InfCard";
import datumSet from "../../datumSet.json";
import bannerList from "../../bannerList.json";


const App = () => {

  const renderItems = ({ item }) => <InfCard datums={item} />;
  const extractor = (item) => item.id.toString();

  const headerComponent = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {bannerList.map(image => <Image style={styles.banner_image} key={image.id} source={{ uri: image.imageUrl }} />)}
    </ScrollView>

  );

  return (
    <View>
      <StatusBar
        backgroundColor="white"
        barStyle='dark-content'
      />
      <FlatList
        contentContainerStyle={styles.content_container}
        ListHeaderComponent={headerComponent}
        style={styles.container}
        keyExtractor={extractor}
        data={datumSet}
        renderItem={renderItems} //dışarıya taşı her render da yeniden oluşuturulmamalı
      />

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#eceff1"
  },
  banner_image: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 5
  },
  header_text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 5,
    backgroundColor: "#eceff1"
  },
  footer_container: {
    alignItems: 'center',
    paddingVertical: 10
  },
  footer_text: {
    fontSize: 16,
    fontWeight: 'bold'
  }

});
export default App;

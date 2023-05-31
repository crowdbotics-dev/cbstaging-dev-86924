import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";

const PetGallery = ({
  navigation
}) => {
  const [filter, setFilter] = useState("Explore");
  const [pets, setPets] = useState([{
    id: 1,
    name: "Buddy",
    image: require("../assets/buddy.jpg"),
    isFav: false
  }, {
    id: 2,
    name: "Charlie",
    image: require("../assets/charlie.jpg"),
    isFav: true
  }, {
    id: 3,
    name: "Daisy",
    image: require("../assets/daisy.jpg"),
    isFav: false
  }, {
    id: 4,
    name: "Luna",
    image: require("../assets/luna.jpg"),
    isFav: true
  }, {
    id: 5,
    name: "Max",
    image: require("../assets/max.jpg"),
    isFav: false
  }, {
    id: 6,
    name: "Rocky",
    image: require("../assets/rocky.jpg"),
    isFav: false
  }]);

  const handleFilter = filter => {
    setFilter(filter);
  };

  const handleFav = id => {
    const updatedPets = pets.map(pet => pet.id === id ? { ...pet,
      isFav: !pet.isFav
    } : pet);
    setPets(updatedPets);
  };

  const filteredPets = filter === "My Pets" ? pets.filter(pet => pet.isMine) : filter === "My Favs" ? pets.filter(pet => pet.isFav) : pets;
  return <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Pet Profile")}>
          <Image source={require("../assets/add-pet.png")} style={styles.headerButton} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          {filteredPets.map(pet => <TouchableOpacity key={pet.id} style={styles.card} onPress={() => navigation.navigate("Pet Details", {
          pet
        })}>
              <Image source={require("./IMG_20230313_183756.jpg")} style={styles.cardImage} />
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardName}>{pet.name}</Text>
                <TouchableOpacity onPress={() => handleFav(pet.id)}>
                  <Image source={pet.isFav ? require("../assets/fav.png") : require("../assets/not-fav.png")} style={styles.cardFavButton} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>)}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={[styles.footerButton, filter === "Explore" && styles.footerButtonHighlighted]} onPress={() => handleFilter("Explore")}>
          <Image source={require("../assets/hourglass.png")} style={styles.footerButtonImage} />
          <Text style={styles.footerButtonText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.footerButton, filter === "My Pets" && styles.footerButtonHighlighted]} onPress={() => handleFilter("My Pets")}>
          <Image source={require("../assets/dog.png")} style={styles.footerButtonImage} />
          <Text style={styles.footerButtonText}>My Pets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.footerButton, filter === "My Favs" && styles.footerButtonHighlighted]} onPress={() => handleFilter("My Favs")}>
          <Image source={require("../assets/fav.png")} style={styles.footerButtonImage} />
          <Text style={styles.footerButtonText}>My Favs</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#EFF5F7"
  },
  header: {
    backgroundColor: "#DFEDF4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  headerTitle: {
    color: "#376D89",
    fontSize: 20,
    fontWeight: "bold"
  },
  headerButton: {
    width: 30,
    height: 30
  },
  scrollViewContent: {
    padding: 10
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 10
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  cardTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  cardName: {
    color: "#376D89",
    fontSize: 16,
    fontWeight: "bold"
  },
  cardFavButton: {
    width: 20,
    height: 20
  },
  footer: {
    backgroundColor: "#DFEDF4",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  footerButton: {
    alignItems: "center"
  },
  footerButtonHighlighted: {
    backgroundColor: "#376D89",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  footerButtonImage: {
    width: 30,
    height: 30
  },
  footerButtonText: {
    color: "#376D89",
    fontSize: 12,
    marginTop: 5
  }
});
export default PetGallery;
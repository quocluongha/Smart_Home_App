import React, {
  useEffect,
  useCallback,
  useLayoutEffect,
  useState,
} from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useNavigation, useRoute } from "@react-navigation/native";

import DeviceButton from "../components/DeviceButton";
import CustomHeaderButton from "../components/CustomHeaderComponent";
import { toggleFav } from "../store/actions/toggleFavRoom";

const RoomScreen = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const roomId = route.params.roomId;
  const roomName = route.params.roomName;

  const isFav = useSelector((state) =>
    state.rooms.favoriteRooms.some((room) => room.id === roomId)
  );

  const [favIcon, setFavIcon] = useState(isFav ? "heart" : "heart-outline");

  //   const toggleFavoriteHandler = useCallback(() => {
  //     dispatch(toggleFav(roomId));
  //   }, [roomId]);

  //   useEffect(() => {
  //     props.navigation.setParams({
  //       toggleFav: toggleFavoriteHandler,
  //     });
  //   }, [toggleFavoriteHandler]);

  //   useEffect(() => {
  //     props.navigation.setParams({
  //       isFav: isFav,
  //     });
  //   }, [isFav]);

  //! React Navigation 6.x
  function favButtonHandler() {
    dispatch(toggleFav(roomId));
  }

  useEffect(() => {
    if (isFav) {
      setFavIcon("heart");
    } else {
      setFavIcon("heart-outline");
    }
  }, [isFav]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: roomName,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            iconName={favIcon}
            onPress={favButtonHandler}
          />
        </HeaderButtons>
      ),
    });
  }, [roomName, favIcon]);

  return (
    <ImageBackground
      source={{ uri: "https://i.ibb.co/p0vSQQQ/Background3.png" }}
      resizeMode="cover"
      style={styles.backgroundImage}
      // blurRadius={1}
    >
      <View style={styles.screen}>
        <View style={styles.content}>
          <View style={styles.buttonContainer}>
            <DeviceButton
              source={{ uri: "https://i.ibb.co/ncYFpgD/Light.png" }}
              onPress={() => {
                navigation.navigate("RoomStack_Light", {
                  roomId: roomId,
                });
              }}
            />
            <DeviceButton
              source={{ uri: "https://i.ibb.co/DMk2mw2/Fan.png" }}
              onPress={() => {
                navigation.navigate("RoomStack_Fan", {
                  roomId: roomId,
                });
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <DeviceButton
              source={{ uri: "https://i.ibb.co/Lz8rzJH/Door.png" }}
              buttonStyle={styles.doorButton}
              onPress={() => {
                navigation.navigate("RoomStack_Door", {
                  roomId: roomId,
                });
              }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

// RoomScreen.navigationOptions = (navData) => {
//   const roomName = navData.navigation.getParam("roomName");
//   const toggleFav = navData.navigation.getParam("toggleFav");
//   const isFav = navData.navigation.getParam("isFav");

//   return {
//     headerTitle: roomName,
//     headerRight: () => {
//       return (
//         <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//           <Item
//             title="Favorite"
//             iconName={isFav ? "heart" : "heart-outline"}
//             onPress={toggleFav}
//           />
//         </HeaderButtons>
//       );
//     },
//   };
// };

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
  },

  screen: {
    flex: 1,
    alignItems: "center",
  },

  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  buttonContainer: {
    height: "51%",
    marginHorizontal: 10,
    justifyContent: "space-between",
  },

  doorButton: {
    width: 164,
    height: 314,
  },
});

export default RoomScreen;

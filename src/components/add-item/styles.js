import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#661dbf",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  item: {
    flex: 1,
    fontSize: 22,
    color: "#ffffff",
  },
  delete: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    borderWidth: 2,
    borderColor: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  taskIncomplete: {
    fontSize: 15,
    textAlign: "center",
    borderWidth: 3,
    padding: 8,
    borderRadius: 10,
    marginRight: 10,
  },
});

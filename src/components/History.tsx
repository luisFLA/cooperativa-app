import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CoopContext } from "../Context/Coopcontext";

export default function History() {
  const { transactions } = useContext(CoopContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
      <Text style={styles.total}>Total: {transactions.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  item: { marginBottom: 5 },
  total: { marginTop: 20 }
});

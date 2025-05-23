import React, { useContext } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { CoopContext } from "../Context/CoopContext";

export default function Dashboard() {
  const { balance, addFunds, transactions } = useContext(CoopContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Cooperativa App</Text>
      <Text style={styles.balance}>Available Balance: L. {balance.toFixed(2)}</Text>
      <Button title="Add Funds" onPress={addFunds} />
      <Text style={styles.subtitle}>Transferencias Realizada:</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  balance: { fontSize: 20, marginBottom: 10 },
  subtitle: { marginTop: 20, fontWeight: "bold" }
});

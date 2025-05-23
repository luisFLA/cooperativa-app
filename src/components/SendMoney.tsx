import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { CoopContext } from "../Context/Coopcontext";

export default function SendMoney() {
  const { transfer } = useContext(CoopContext);
  const [account, setAccount] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = () => {
    const parsed = parseFloat(amount);
    if (isNaN(parsed)) {
      Alert.alert("Error", "Ingresa una cantida valida");
      return;
    }

    const success = transfer(parsed);
    if (success) {
      Alert.alert("Success", "Transferencia Realizada");
      setAccount("");
      setReceiver("");
      setAmount("");
    } else {
      Alert.alert("Error", "No tiene fondos");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Money</Text>
      <TextInput placeholder="Account number" value={account} onChangeText={setAccount} style={styles.input} />
      <TextInput placeholder="Amount" keyboardType="numeric" value={amount} onChangeText={setAmount} style={styles.input} />
      <TextInput placeholder="Receiver name" value={receiver} onChangeText={setReceiver} style={styles.input} />
      <Button title="Send" onPress={handleTransfer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  title: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 5 }
});

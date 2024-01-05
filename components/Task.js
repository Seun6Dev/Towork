import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function Task(props){
    
    return(
        <View style={styles.item}> 
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
            </View>
            <View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:"white",
        padding:15,
        borderRadius:10,
        opacity:0.4,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:25
    },
    square:{
        width:24,
        height:24,
        backgroundColor:"lightblue",
        flexWrap:"wrap",
        borderRadius:5
    },
    itemText:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        maxWidth:"100%",
        fontSize:25
    },
    circular:{
        width:12,
        height:12,
        borderColor:"blue",
        borderWidth:2,
        borderRadius:5
    }
})

import { Text } from "./Themed";
import { Post } from "../app/types";
import { View } from "./Themed";
import { StyleSheet } from "react-native";
import { Image,Pressable } from "react-native";
import Octicons from '@expo/vector-icons/Octicons';
import { Link } from "expo-router";

type PostListItemProps = {
    post: Post

};
type FooterButtonProp={
    text:string;
    icon:React.ComponentProps<typeof Octicons>['name'];
}

function FooterButton ({text,icon}:FooterButtonProp) {
return(
    
         <View style={{flexDirection:'row'}}>
                    <Octicons name={icon} size={16} color="black" />
                    <Text style={{marginLeft:5,color:'black',fontWeight:'500'}}>{text}</Text>
                </View>
               
   
);
}
export default function PostListItem({ post }: PostListItemProps) {
    return (
       
        <Link href={'/posts/${post.id}'} asChild>
            
        <Pressable style={styles.container}>
            {/* Header */}
            <Link href={'/users/${post.author.id'} asChild>
            
            <Pressable style={styles.header}>
                <Image source={{ uri: post.author.image }} style={styles.userImage}
                />
                <View>
                    <Text> {post.author.name} </Text>
                    <Text> {post.author.position} </Text>
                </View>
            </Pressable>
            </Link>
            {/* Text content */}
            <Text style={styles.content}>{post.content}</Text>

            {/* Image cintent */}

            {post.image && (
                <Image source={{ uri: post.image }} style={styles.postImage} />
            )}


            {/* footer content */}
            <View style={styles.footer}>
               
                <FooterButton text="Like" icon="thumbsup"/>
                <FooterButton text="Comment" icon="thumbsup"/>
                <FooterButton text="Share" icon="thumbsup"/>
            </View>
            </Pressable>
</Link>
    );
}

const styles = StyleSheet.create({
   
    container: {
        backgroundColor: 'white',
        width:'100%',
        maxWidth:500,
        alignSelf:'center'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    // body
    content: {
        margin: 10,
        marginTop: 0,

    },
    postImage: {
        width: '100%',
        aspectRatio: 1,
    },

    // footer
    footer:{
        flexDirection:'row',
        paddingVertical:10,
        justifyContent:'space-around',
        borderTopWidth:0.5,
        borderColor:'lightgray',
    },
});
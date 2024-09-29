import {Text} from 'react-native';
import posts from '../../assets/data/posts.json';
import PostListItem from '../../components/PostListItem';
import { ScrollView } from 'react-native-gesture-handler';

export default function PostDetailsScreen(){
    const post = posts[0];
    return (
        <ScrollView>
    <PostListItem post={post} />;
    </ScrollView>
    );
}
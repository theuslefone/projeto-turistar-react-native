import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

//const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function LocalCard(props) {
    
    <Card>
        <Card.Actions>
            <Button>x</Button>
        </Card.Actions>
        <Card.Title title="{props.title}"/>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
            <List.Item
            title="{'. ' ${props.Ponto}}"/>
        </Card.Content>
    </Card>

}
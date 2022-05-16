import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: {title: ""} }; // 사용자의 입력을 저장할 오브젝트
        this.add = props.add; // props의 함수를 this.add에 연결
    }

    // 사용자가 input 필드에 키를 하나 입력할 떄마다 실행되며 input 필드에 담긴 문자열을 자바스크립트 오브젝트에 저장한다.
    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem });
        console.log(thisItem);
    }

    onButtonClick = () => {
        this.add(this.state.item); //add 함수 사용
        this.setState({ item: { title: "" }});
    }

    enterKeyEventHandler = (e) => {
        if(e.key === 'Enter') {
            this.onButtonClick();
        }
    }

    render() {
        return(
            <Paper style={{ margin: 16, padding: 16 }}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{ padding: 16 }}>
                        <TextField 
                        placeholder="Add Todo here" fullWidth  
                        onChange={this.onInputChange} 
                        value={this.state.item.title} 
                        onKeyPress={this.enterKeyEventHandler}
                        />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button fullWidth color="secondary" variant="outlined" onClick={this.onButtonClick}>
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}
export default AddTodo;


import { useState } from 'react'
import { ItemList, Container, ContainerItens, Input, Button, List } from './styles'




function App() {
    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState('')




    function changeInput(event) {
        setInputValue(event.target.value)

    }

    function buttonClick() {
        setTasks([...tasks, inputValue])

    }


   


    return (
        <Container>
            <ContainerItens>
                <Input placeholder="Digite a sua tarefa" onChange={changeInput} />

                <Button onClick={buttonClick}>Adicionar Tarefa  </Button>

               

                <List>{

                    tasks.map((item, index) => (
                        <ItemList key={index}>{item}
                      
                        </ItemList>
                    ))
                
                     

                }
                </List>


            </ContainerItens>
        </Container>
    )
}

export default App
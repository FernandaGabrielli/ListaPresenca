// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

import './styles.css';
import { Card } from '../../components/Card';

function Home() {
  const [studentName, setStudentName] = useState(); // captar os estudantes da lista 
  const [students, setStudents] = useState([]); // armazenar os estudantes da lista 
  const [user, setUser] = useState({ name: '', avatar: ''})

  function handleAddStudent(){
    const newStudent = {
      name: studentName, 
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      };

      setStudents(prevState => [...prevState, newStudent]); // prevState recupera o nome para n substituir automaticamente, novo vetor
    }

    useEffect(() => {
      fetch('https://api.github.com/users/fernandagabrielli')
      .then(response => response.json())
      .then(data => {
        setUser({
          name: data.name,  
          avatar: data.avatar_url,
        })
      })
    })

  return (
    <div className="container">
            
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de Perfil usuário" />
        </div>
      </header>
      <input 
        type="text" 
        placeholder="Digite seu nome"
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="submit" onClick={handleAddStudent}>
        Adicionar
        </button>

      {      
        students.map(student => (
          <Card 
          key={student.time}
          name={student.name} 
          time={student.time} />
          )
        )
      }  
  </div>
  )
}

export default Home
const e = React.createElement;
const { useState } = React;

function App(){
  const [gender, setGender] = useState('neutral');
  const [age, setAge] = useState('adult');
  const [vibe, setVibe] = useState('');
  const [surname, setSurname] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(eve){
    eve.preventDefault();
    setLoading(true);
    setResults(null);
    try{
      const res = await fetch('/generate-names', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gender, age, vibe, surname })
      });
      const data = await res.json();
      setResults(data);
    }catch(err){
      alert('Error: '+err.message);
    }finally{setLoading(false)}
  }

  return e('div', null,
    e('h1', null, 'Chinese Name Generator'),
    e('form',{onSubmit},
      e('label',null,'Gender'),
      e('select',{value:gender,onChange:e=>setGender(e.target.value)},
        e('option',{value:'male'},'Male'),
        e('option',{value:'female'},'Female'),
        e('option',{value:'neutral'},'Neutral')
      ),
      e('label',null,'Age Range'),
      e('select',{value:age,onChange:e=>setAge(e.target.value)},
        e('option',{value:'baby'},'Baby'),
        e('option',{value:'child'},'Child'),
        e('option',{value:'adult'},'Adult')
      ),
      e('label',null,'Desired meaning / vibe (English)'),
      e('input',{value:vibe,onChange:e=>setVibe(e.target.value),placeholder:'e.g. gentle and elegant'}),
      e('label',null,'Surname (optional, Chinese characters or pinyin)'),
      e('input',{value:surname,onChange:e=>setSurname(e.target.value),placeholder:'e.g. Zhang or 张'}),
      e('button',{type:'submit',disabled:loading}, loading? 'Generating...' : 'Generate')
    ),
    results && e('div',{style:{marginTop:16}},
      e('h2',null,'Results (surname chosen: '+results.surname+')'),
      results.results.map((r,idx)=> e('div',{key:idx,className:'result'},
        e('div',{className:'name'},r.chinese),
        e('div',{className:'pinyin'},r.pinyin),
        e('div',null,r.explanation)
      ))
    )
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(e(App));

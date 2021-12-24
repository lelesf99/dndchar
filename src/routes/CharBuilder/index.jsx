import "./style.css";
import React, { useState, useEffect } from 'react';
import FormContainer from '../../components/FormContainer';
import RaceCard from "../../components/RaceCard";
import Button from "../../components/Button"
import HabCard from "../../components/HabCard";

import Char from "../../models/Char"
import DragCard from "../../components/DragCard";

export default function CharBuilder(props) {

    const [willRollHab, setWillRollHab] = useState(false);
    const [habRolls, setHabRolls] = useState([]);
    const [habVals, setHabVals] = useState({
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
    });
    const [selectClass, setSelectClass] = useState('');

    const [dragData, setDragData] = useState(null);
    const [currTarget, setCurrTarget] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    // useEffect(() => {
    //     console.log(currTarget);
    // }, [currTarget]);


    function confirmHabRoll(hab, value, ref) {
        if (isNaN(value) || value <= 0 || value > 20) return;
        let tmpHabVals = {
            str: habVals.str,
            dex: habVals.dex,
            con: habVals.con,
            int: habVals.int,
            wis: habVals.wis,
            cha: habVals.cha,
        };
        switch (hab) {
            case "str":
                if (habVals.str !== 0) return;
                tmpHabVals.str = value;
                setHabVals(tmpHabVals);
                break;
            case "dex":
                if (habVals.dex !== 0) return;
                tmpHabVals.dex = value;
                setHabVals(tmpHabVals);
                break;
            case "con":
                if (habVals.con !== 0) return;
                tmpHabVals.con = value;
                setHabVals(tmpHabVals);
                break;
            case "int":
                if (habVals.int !== 0) return;
                tmpHabVals.int = value;
                setHabVals(tmpHabVals);
                break;
            case "wis":
                if (habVals.wis !== 0) return;
                tmpHabVals.wis = value;
                setHabVals(tmpHabVals);
                break;
            case "cha":
                if (habVals.cha !== 0) return;
                tmpHabVals.cha = value;
                setHabVals(tmpHabVals);
                break;
            default:
                break;

        }
        const temp = habRolls;
        temp[parseInt(ref.parentNode.id)] = 0;
        setHabRolls(temp);
    }
    function cancelHabRoll(hab, value) {
        switch (hab) {
            case "str":
                setHabVals({ ...habVals, str: 0, });
                break;
            case "dex":
                setHabVals({ ...habVals, dex: 0, });
                break;
            case "con":
                setHabVals({ ...habVals, con: 0, });
                break;
            case "int":
                setHabVals({ ...habVals, int: 0, });
                break;
            case "wis":
                setHabVals({ ...habVals, wis: 0, });
                break;
            case "cha":
                setHabVals({ ...habVals, cha: 0, });
                break;
            default:
                break;
        }
        const temp = habRolls;
        const index = temp.indexOf(0);
        temp[index] = value;
        setHabRolls(temp);
    }

    function startDrag(e) {
        setDragData(e.target);
        setIsDragging(true);
    }
    function updateDrag(e) {
        if (e.touches) {
            if (isDragging && document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY) !== currTarget)
                setCurrTarget(document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY))
        } else {
            if (isDragging && e.target !== currTarget)
                setCurrTarget(e.target)
        }
    }
    function endDrag(e) {
        setIsDragging(false);
    }

    return (
        <div className='char-create-container'
            onMouseDown={(e) => startDrag(e)}
            onMouseMove={(e) => updateDrag(e)}
            onMouseUp={(e) => endDrag(e)}
            onTouchStart={(e) => startDrag(e)}
            onTouchMove={(e) => updateDrag(e)}
            onTouchEnd={(e) => endDrag(e)}
        >

            <h1>Criar Personagem</h1>
            <FormContainer>
                <div className="input-row">
                    <input className='char-name-input' id="charName" name="charName" type="text" placeholder='Nome do Personagem' />
                    <input className='char-level-input' id="charLevel" name="charLevel" type="number" placeholder="lvl" />
                </div>
                <h2>Roladas de habilidade</h2>
                <p>Aqui você pode rolar seu valores de habilidade e depois arrasta-los até a habilidades correspondentes</p>
                <div className="input-row">
                    {
                        willRollHab ?
                            <>
                                {Object.entries(habVals).map((hab, key) =>
                                    <HabCard
                                        key={key}
                                        currTarget={currTarget}
                                        dragData={dragData}
                                        isDragging={isDragging}
                                        confirmFn={confirmHabRoll}
                                        cancelFn={cancelHabRoll}
                                        hab={hab[0]}
                                        value={hab[1]} />
                                )}
                            </>
                            :
                            <>
                                <input className='char-hab-input' id="charLevel" name="charLevel" type="number" placeholder="str" />
                                <input className='char-hab-input' id="charLevel" name="charLevel" type="number" placeholder="dex" />
                                <input className='char-hab-input' id="charLevel" name="charLevel" type="number" placeholder="con" />
                                <input className='char-hab-input' id="charLevel" name="charLevel" type="number" placeholder="int" />
                                <input className='char-hab-input' id="charLevel" name="charLevel" type="number" placeholder="wis" />
                                <input className='char-hab-input' id="charLevel" name="charLevel" type="number" placeholder="cha" />

                            </>

                    }
                </div>

                <div className="input-row">
                    {habRolls.map((roll, index) => <DragCard id={index} key={index} className='char-hab-drag' isDragging={isDragging} currTarget={currTarget} dragData={dragData} body={roll} />)}
                </div>
                <div className="button-group">

                    {willRollHab && <Button className="roll-btn sec" onClick={() => {
                        setWillRollHab(false);
                        setHabRolls([]);
                    }} ><span>Não vou rolar</span></Button>}
                    <Button className="roll-btn sec" onClick={() => {
                        setWillRollHab(true);
                        setHabVals({
                            str: 0,
                            dex: 0,
                            con: 0,
                            int: 0,
                            wis: 0,
                            cha: 0,
                        })
                        setHabRolls([Char.rollHab(), Char.rollHab(), Char.rollHab(), Char.rollHab(), Char.rollHab(), Char.rollHab()]);
                    }}><span>Rolar</span></Button>
                </div>
            </FormContainer>
            <h2 >Escolha uma Raça</h2>
            <RaceCard className={`class-card ${selectClass === 'ANAO' ? 'active' : ''}`}
                onClick={() => setSelectClass('ANAO')}
                header={
                    <h3>Anão</h3>
                }
                body={
                    <p> Aumento no Valor de Habilidade. Seu valor de
                        Constituição aumenta em 2.
                        Idade. Anões tornam-se maduros na mesma
                        proporção que os humanos, mas são considerados jovens
                        até atingirem a idade de 50 anos. Em média, eles vivem
                        350 anos.
                    </p>
                }
            ></RaceCard>
            <RaceCard className={`class-card ${selectClass === 'HUMANO' ? 'active' : ''}`}
                onClick={() => setSelectClass('HUMANO')}
                header={
                    <h3>Humano</h3>
                }
            ></RaceCard>
            <RaceCard className={`class-card ${selectClass === 'ELFO' ? 'active' : ''}`}
                onClick={() => setSelectClass('ELFO')}
                header={
                    <h3>Elfo</h3>
                }
            ></RaceCard>
        </div>
    );
}
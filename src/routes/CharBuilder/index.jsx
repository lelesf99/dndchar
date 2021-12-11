import "./style.css";
import React, { useState, useEffect } from 'react';
import FormContainer from '../../components/FormContainer';
import ClickCard from "../../components/ClickCard";
import Button from "../../components/Button"
import HabCard from "../../components/HabCard";

import Char from "../../models/Char"
import DragCard from "../../components/DragCard";

export default function CharBuilder(props) {

    const [willRollHab, setWillRollHab] = useState(false);
    const [habRolls, setHabRolls] = useState([]);
    const [habVal, setHabVal] = useState({
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
    });
    const [selectClass, setSelectClass] = useState('');

    useEffect(() => {
        console.log(habVal);
    }, [habVal]);


    function confirmHabRoll(hab, value) {
        let tmpHabVal = {
            str: habVal.str,
            dex: habVal.dex,
            con: habVal.con,
            int: habVal.int,
            wis: habVal.wis,
            cha: habVal.cha,
        };
        switch (hab) {
            case "str":
                if (habVal.str !== 0) return;
                tmpHabVal.str = value;
                setHabVal(tmpHabVal);
                break;
            case "dex":
                if (habVal.dex !== 0) return;
                tmpHabVal.dex = value;
                setHabVal(tmpHabVal);
                break;
            case "con":
                if (habVal.con !== 0) return;
                tmpHabVal.con = value;
                setHabVal(tmpHabVal);
                break;
            case "int":
                if (habVal.int !== 0) return;
                tmpHabVal.int = value;
                setHabVal(tmpHabVal);
                break;
            case "wis":
                if (habVal.wis !== 0) return;
                tmpHabVal.wis = value;
                setHabVal(tmpHabVal);
                break;
            case "cha":
                if (habVal.cha !== 0) return;
                tmpHabVal.cha = value;
                setHabVal(tmpHabVal);
                break;
            default:
                break;

        }
        const temp = habRolls;
        const index = temp.indexOf(value);
        temp[index] = 0;
        setHabRolls(temp);
    }
    function cancelHabRoll(hab, value) {
        switch (hab) {
            case "str":
                setHabVal({ ...habVal, str: 0, });
                break;
            case "dex":
                setHabVal({ ...habVal, dex: 0, });
                break;
            case "con":
                setHabVal({ ...habVal, con: 0, });
                break;
            case "int":
                setHabVal({ ...habVal, int: 0, });
                break;
            case "wis":
                setHabVal({ ...habVal, wis: 0, });
                break;
            case "cha":
                setHabVal({ ...habVal, cha: 0, });
                break;
            default:
                break;
        }
        const temp = habRolls;
        const index = temp.indexOf(0);
        temp[index] = value;
        setHabRolls(temp);
    }
    return (
        <div className='char-create-container' >

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
                                <HabCard
                                    currTarget={props.currTarget}
                                    dragData={props.dragData}
                                    isDragging={props.isDragging}
                                    confirmFn={() => confirmHabRoll("str", parseInt(props.dragData.innerText))}
                                    cancelFn={() => cancelHabRoll("str", habVal.str)}
                                    hab="str"
                                    value={habVal.str} />

                                <HabCard
                                    currTarget={props.currTarget}
                                    dragData={props.dragData}
                                    isDragging={props.isDragging}
                                    confirmFn={() => confirmHabRoll("dex", parseInt(props.dragData.innerText))}
                                    cancelFn={() => cancelHabRoll("dex", habVal.dex)}
                                    hab="dex"
                                    value={habVal.dex} />

                                <HabCard
                                    currTarget={props.currTarget}
                                    dragData={props.dragData}
                                    isDragging={props.isDragging}
                                    confirmFn={() => confirmHabRoll("con", parseInt(props.dragData.innerText))}
                                    cancelFn={() => cancelHabRoll("con", habVal.con)}
                                    hab="con"
                                    value={habVal.con} />

                                <HabCard
                                    currTarget={props.currTarget}
                                    dragData={props.dragData}
                                    isDragging={props.isDragging}
                                    confirmFn={() => confirmHabRoll("int", parseInt(props.dragData.innerText))}
                                    cancelFn={() => cancelHabRoll("int", habVal.int)}
                                    hab="int"
                                    value={habVal.int} />

                                <HabCard
                                    currTarget={props.currTarget}
                                    dragData={props.dragData}
                                    isDragging={props.isDragging}
                                    confirmFn={() => confirmHabRoll("wis", parseInt(props.dragData.innerText))}
                                    cancelFn={() => cancelHabRoll("wis", habVal.wis)}
                                    hab="wis"
                                    value={habVal.wis} />

                                <HabCard
                                    currTarget={props.currTarget}
                                    dragData={props.dragData}
                                    isDragging={props.isDragging}
                                    confirmFn={() => confirmHabRoll("cha", parseInt(props.dragData.innerText))}
                                    cancelFn={() => cancelHabRoll("cha", habVal.cha)}
                                    hab="cha"
                                    value={habVal.cha} />

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
                    {habRolls.map((roll, index) => <DragCard key={index} className='char-hab-drag' isDragging={props.isDragging} dragData={props.dragData} body={roll} />)}
                </div>
                <div className="button-group">

                    {willRollHab && <Button className="roll-btn sec" onClick={() => {
                        setWillRollHab(false);
                        setHabRolls([]);
                    }} ><span>Não vou rolar</span></Button>}
                    <Button className="roll-btn sec" onClick={() => {
                        setWillRollHab(true);
                        if (habRolls.length === 0) {
                            setHabVal({
                                str: 0,
                                dex: 0,
                                con: 0,
                                int: 0,
                                wis: 0,
                                cha: 0,
                            })
                            setHabRolls([...habRolls, Char.rollHab(), Char.rollHab(), Char.rollHab(), Char.rollHab(), Char.rollHab(), Char.rollHab()]);
                        } else {
                            setHabVal({
                                str: 0,
                                dex: 0,
                                con: 0,
                                int: 0,
                                wis: 0,
                                cha: 0,
                            })
                            setHabRolls([Char.rollHab(), Char.rollHab(), Char.rollHab(), Char.rollHab(), Char.rollHab(), Char.rollHab()]);
                        }
                    }}><span>Rolar</span></Button>
                </div>
            </FormContainer>
            <h2 className={`class-card ${selectClass === 'ANAO' ? 'active' : ''}`}>Escolha uma Raça</h2>
            <ClickCard
                onClick={() => setSelectClass('ANAO')}
                header={
                    <h3>Anão</h3>
                }
            ></ClickCard>
            <ClickCard className={`class-card ${selectClass === 'HUMANO' ? 'active' : ''}`}
                onClick={() => setSelectClass('HUMANO')}
                header={
                    <h3>Humano</h3>
                }
            ></ClickCard>
            <ClickCard className={`class-card ${selectClass === 'ELFO' ? 'active' : ''}`}
                onClick={() => setSelectClass('ELFO')}
                header={
                    <h3>Elfo</h3>
                }
            ></ClickCard>
        </div>
    );
}
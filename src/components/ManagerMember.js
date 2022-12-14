// import React, { useState } from "react";
// import { Avatar, List } from 'antd';
// import {data} from '../people';
// import Item from "antd/lib/list/Item";
// import {DeleteOutlined} from "@ant-design/icons";
// const ManagerMember = () => {
  //   

  
  

// export default ManagerMember;

import React, { useState } from "react";
import { useReducer } from 'react';
import { Button, Checkbox, Col, Form, Input, List, notification, Radio, Row, Popconfirm } from 'antd';
import TextArea from "antd/lib/input/TextArea";
// import data from "../data/data";
// const data = [];

// export default function ManagerMember() {
    // const [member, setMember] = useState(data);
    // const [name, setName] = useState();
    // const [age, setAge] = useState();
    // const [gender, setGender] = useState();
    // const [address, setAddress] = useState();
    // const [phone, setPhone] = useState();
    // const [iddel, setIddel] = useState();

    

    const ManagerMember = () =>{
        const formReducer = (state, action) => {
            switch (action.type) {
                case 'add':
                    return {
                        ...state,
                        member:  
                                 [...state.member, {
                                    id: state.member.length + 1,
                                    name: name,
                                    age: age,
                                    phone: phone,
                                    gender: gender,
                                    address: address,
                                }]
                    }
                case 'remove':
                    return {
                        ...state,
                        member:state.member.filter((item) => item.id !== iddel)
                    }
                case 'delall':
                    return {
                        ...state,
                        member:[]
                    }

            }
        }
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [iddel, setIddel] = useState();
    const [state, dispatch] = useReducer(formReducer, {member:[]});
        

    const handleCreateMember = (event) => {
        event.preventDefault();
        if ((name==''||name==undefined)||(age==''||age==undefined)||(gender==''||gender==undefined)||(address==''||address==undefined)||(phone==''||phone==undefined)) {
            notification['warning']({
                message: 'Xin h??y ??i???n ?????y ????? th??ng tin',
                duration: 3
            })
        } else {
        dispatch({type:'add'});
    }
}

    const removeMember = (id) => {
        setIddel(id);
        dispatch({type:'remove'});
            notification['success']({
            message: '???? x??a th??nh vi??n',
            duration: 3
        })
    }
    // const handleCreateMember = (event) => {
    //     event.preventDefault();
    //     if ((name==''||name==undefined)||(age==''||age==undefined)||(gender==''||gender==undefined)||(address=='')||(phone=='')) {
    //         notification['warning']({
    //             message: 'Xin h??y ??i???n ?????y ????? th??ng tin',
    //             duration: 3
    //         })
    //     } else {
    //     setMember((item) => [...item, {
    //         id: member.length + 1,
    //         name: name,
    //         age: age,
    //         phone: phone,
    //         gender: gender,
    //         address: address,
    //     }])}
    //     console.log(phone);
    // }

    // const removeMember = (id) => {
    //     const removedData = member.filter((item) => item.id !== id);
    //     setMember(removedData);

    //     notification['success']({
    //         message: '???? x??a th??nh vi??n',
    //         duration: 3
    //     })
    // }

    const confirmDelete = () => {
        // setMember([]);
        dispatch({type:'delall'});
        notification['success']({
            message: 'Kh??ng c??n th??nh vi??n',
            duration: 3
        });
        // return;
    }

    const cancelDelete = () => {
        return;
    }

    

    
    const searchMember = (keyword) => {
        // const searchMember = member.filter((item) => item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
        // setMember(searchMember);
    }

    return (
        <>
            <Form className="Form"
                wrapperCol={{ span: 8 }}>
               
                <Form.Item label="T??n" name="T??n" rules={[{ required: true, message: 'H??y nh???p t??n!' }]}>
                    <Input type='text' onChange={(event) => setName(event.target.value)} />
                </Form.Item>

                <Form.Item label="Tu???i" name="Tu???i" rules={[{ required: true, message: 'H??y nh???p tu???i!' }]}>
                    <Input type='number' min={1} max={100} onChange={(event) => setAge(event.target.value)} />
                </Form.Item>

                <Form.Item name="Gi???i t??nh" label="Gi???i t??nh" rules={[{ required: true }]}>
                    <Radio.Group onChange={(event) => setGender(event.target.value)}>
                        <Radio value="Nam">Nam</Radio>
                        <Radio value="N???">N??? </Radio>
                        <Radio value="Kh??c">Kh??c</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="?????a ch???" name="?????a ch???" rules={[{ required: true, message: 'H??y nh???p ?????a ch???!' }]}>
                    <Input type='text' onChange={(event) => setAddress(event.target.value)} />
                </Form.Item>

                <Form.Item label="??i???n tho???i" name="??i???n tho???i" rules={[{ required: true, message: 'H??y nh???p s??? ??i???n tho???i!' }]}>
                    <Input type='number'  onChange={(event)=>setPhone(event.target.value)}/>
                </Form.Item>

                <Form.Item label="S??? th??ch" name="S??? th??ch">
                    <Checkbox> Game </Checkbox>
                    <Checkbox> G??i </Checkbox>
                    <Checkbox> Nh???u </Checkbox>
                    <Checkbox> Ng??? </Checkbox>
                </Form.Item>

                <Form.Item label="M?? t??? b???n th??n" name="M?? t??? b???n th??n">
                    <TextArea rows={4} />
                </Form.Item>

                <Button onClick={handleCreateMember}> Th??m th??nh vi??n</Button>
                
            </Form>
            <Popconfirm
                        title="B???n mu???n x??a t???t c??? th??nh vi??n?"
                        onConfirm={confirmDelete}
                        onCancel={cancelDelete}
                        okText="C??"
                        cancelText="Kh??ng"
                    >
                        <Button style={{ float: 'center'}}>X??a t???t c???</Button>
            </Popconfirm>
            <div>
                <Row>
                    <Col span={16}>
                        <Input className="search" placeholder="Search" onChange={(e) => searchMember(e.target.value)} type='text' style={{ marginTop: 30, }}></Input>
                    </Col>
                </Row>
                <List
                    itemLayout="horizontal"
                    dataSource={state.member}
                    renderItem={item => (
                        <List.Item className="Member" style={{ textAlign: 'left' }}>
                            <List.Item.Meta 
                                title={<b>{item.name}</b>}
                                description={
                                    <div >
                                        <Row>
                                            <Col>Tu???i: </Col>
                                            <Col>{item.age}</Col>
                                        </Row>

                                        <Row>
                                            <Col>Gi???i t??nh: </Col>
                                            <Col>{item.gender}</Col>
                                        </Row>
                                        <Row>
                                            <Col>?????a ch???: </Col>
                                            <Col>{item.address}</Col>
                                        </Row>
                                        <Row>
                                            <Col>??i???n tho???i: </Col>
                                            <Col>{item.phone}</Col>
                                        </Row>
                                    </div>
                                }
                            />

                            <div style={{ marginRight: 20}}>
                                <Button onClick={() => removeMember(item.id)}>X??a</Button>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}

export default ManagerMember;
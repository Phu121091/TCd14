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
                message: 'Xin hãy điền đầy đủ thông tin',
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
            message: 'Đã xóa thành viên',
            duration: 3
        })
    }
    // const handleCreateMember = (event) => {
    //     event.preventDefault();
    //     if ((name==''||name==undefined)||(age==''||age==undefined)||(gender==''||gender==undefined)||(address=='')||(phone=='')) {
    //         notification['warning']({
    //             message: 'Xin hãy điền đầy đủ thông tin',
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
    //         message: 'Đã xóa thành viên',
    //         duration: 3
    //     })
    // }

    const confirmDelete = () => {
        // setMember([]);
        dispatch({type:'delall'});
        notification['success']({
            message: 'Không còn thành viên',
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
               
                <Form.Item label="Tên" name="Tên" rules={[{ required: true, message: 'Hãy nhập tên!' }]}>
                    <Input type='text' onChange={(event) => setName(event.target.value)} />
                </Form.Item>

                <Form.Item label="Tuổi" name="Tuổi" rules={[{ required: true, message: 'Hãy nhập tuổi!' }]}>
                    <Input type='number' min={1} max={100} onChange={(event) => setAge(event.target.value)} />
                </Form.Item>

                <Form.Item name="Giới tính" label="Giới tính" rules={[{ required: true }]}>
                    <Radio.Group onChange={(event) => setGender(event.target.value)}>
                        <Radio value="Nam">Nam</Radio>
                        <Radio value="Nữ">Nữ </Radio>
                        <Radio value="Khác">Khác</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="Địa chỉ" name="Địa chỉ" rules={[{ required: true, message: 'Hãy nhập địa chỉ!' }]}>
                    <Input type='text' onChange={(event) => setAddress(event.target.value)} />
                </Form.Item>

                <Form.Item label="Điện thoại" name="Điện thoại" rules={[{ required: true, message: 'Hãy nhập số điện thoại!' }]}>
                    <Input type='number'  onChange={(event)=>setPhone(event.target.value)}/>
                </Form.Item>

                <Form.Item label="Sở thích" name="Sở thích">
                    <Checkbox> Game </Checkbox>
                    <Checkbox> Gái </Checkbox>
                    <Checkbox> Nhậu </Checkbox>
                    <Checkbox> Ngủ </Checkbox>
                </Form.Item>

                <Form.Item label="Mô tả bản thân" name="Mô tả bản thân">
                    <TextArea rows={4} />
                </Form.Item>

                <Button onClick={handleCreateMember}> Thêm thành viên</Button>
                
            </Form>
            <Popconfirm
                        title="Bạn muốn xóa tất cả thành viên?"
                        onConfirm={confirmDelete}
                        onCancel={cancelDelete}
                        okText="Có"
                        cancelText="Không"
                    >
                        <Button style={{ float: 'center'}}>Xóa tất cả</Button>
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
                                            <Col>Tuổi: </Col>
                                            <Col>{item.age}</Col>
                                        </Row>

                                        <Row>
                                            <Col>Giới tính: </Col>
                                            <Col>{item.gender}</Col>
                                        </Row>
                                        <Row>
                                            <Col>Địa chỉ: </Col>
                                            <Col>{item.address}</Col>
                                        </Row>
                                        <Row>
                                            <Col>Điện thoại: </Col>
                                            <Col>{item.phone}</Col>
                                        </Row>
                                    </div>
                                }
                            />

                            <div style={{ marginRight: 20}}>
                                <Button onClick={() => removeMember(item.id)}>Xóa</Button>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}

export default ManagerMember;
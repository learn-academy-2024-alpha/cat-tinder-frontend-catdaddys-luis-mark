import React, { useState } from 'react';
import { Col, Form, FormGroup, Label, Row } from "reactstrap"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"



const CatNew = ({ createNewCat }) => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (catData) => {
    createNewCat(catData)
    navigate("/catindex")
  }

  return (
    <div className="new-page-body">
      <h2 className="gochi-hand-regular page-title centering-content">
        Add a New Cat
      </h2>

      <div className="svgContainer">
        {/* SVG code here */}
        <svg className="cat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100">
          <circle cx="100" cy="100" r="80" fill="#f890e7" />
          <path d="M70,80 Q65,60 50,80" fill="#0bd3d3" /> {/* Left ear */}
          <path d="M130,80 Q135,60 150,80" fill="#0bd3d3" /> {/* Right ear */}
          <circle cx="80" cy="120" r="10" fill="#ffffff" /> {/* Left eye */}
          <circle cx="120" cy="120" r="10" fill="#ffffff" /> {/* Right eye */}
          <path d="M90,150 Q100,160 110,150" stroke="#d0d0d0" strokeWidth="5" fill="none" /> {/* Mouth */}
        </svg>
      </div>


      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Enter Cat's Name</Label>
              <input
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                className="form-control"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span>Name is required</span>
              )}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="age">Enter Your Cat's Age</Label>
              <input
                id="age"
                name="age"
                placeholder="Age"
                type="number"
                min="0"
                className="form-control"
                {...register("age", { required: true })}
              />
              {errors.age && (
                <span>Age is required</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="enjoys">What does your cat enjoy doing?</Label>
          <input
            id="enjoys"
            name="enjoys"
            placeholder="Enjoys"
            type="text"
            className="form-control"
            {...register("enjoys", { required: true })}
          />
          {errors.enjoys && (
            <span>Enjoys is required</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <input
            id="image"
            name="image"
            placeholder="Image URL"
            type="text"
            className="form-control"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span>Image is required</span>
          )}
        </FormGroup>
        <div className="centering-content">
          <button type="submit">
            Submit
          </button>
        </div>
      </Form>
    </div>
  )
}

export default CatNew
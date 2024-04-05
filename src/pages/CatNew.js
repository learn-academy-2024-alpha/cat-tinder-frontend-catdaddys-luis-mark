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
      <h2 className="add-new-cat">
        Add a New Cat
      </h2>
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
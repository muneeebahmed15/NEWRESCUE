import React, { useState } from "react";
import Layout from "../../layout";
import { Button, message, Steps, Form, Input, Card, Select, Upload } from "antd";
import { AddRecord, useAddRecord } from "../../../actions/addAnimal";
import InputField from "../../../UI/InputField";
import Section1 from "./record/section1";
import Section2 from "./record/section2";
import Section3 from "./record/section3";
import Section4 from "./record/section4";

const { Step } = Steps;

const CreateRecord = () => {
  const currentYear = new Date().getFullYear;
  // console.log(currentYear);
  const [current, setCurrent] = useState(0);

  const { addRecord, loading, data, handleFile, handleChange } = useAddRecord();

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "Section 1",
      content: (
        <>
          <Card>
            <Section1 data={data} handleChange={handleChange} handleFile={handleFile} />
          </Card>
        </>
      ),
    },
    {
      title: "Section 2",
      content: (
        <>
          <Card>
            <Section2 data={data} handleChange={handleChange} />
          </Card>
        </>
      ),
    },
    {
      title: "Section 3",
      content: (
        <>
          <Card>
            <Section3 data={data} handleChange={handleChange} handleFile={handleFile} />
          </Card>
        </>
      ),
    },
    {
      title: "Section 4",
      content: (
        <>
          <Card>
            <Section4 data={data} handleChange={handleChange} />
          </Card>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="mx-4">
        <Steps current={current}>
          {steps.map((step) => (
            <Step key={step.title} title={step.title} />
          ))}
        </Steps>

        <div style={{ marginTop: 24 }}>
          <Form name="animalForm" initialValues={{ remember: true }} onFinish={addRecord}>
            {steps[current].content}
            <div style={{ marginTop: 24 }}>
              {current > 0 && (
                <Button style={{ marginRight: 8 }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" htmlType="submit">
                  {loading ? "loading..." : "Submit"}
                </Button>
              )}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateRecord;

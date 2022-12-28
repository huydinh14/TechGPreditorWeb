import "./header.scss"
import { DatePicker, Space, AutoComplete, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import "./header.scss"

export default function Header() {
    const optionsAutoComplete = [
        {
            value: 'Burns Bay Road',
        },
        {
            value: 'Downing Street',
        },
        {
            value: 'Wall Street',
        },
    ];

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <div className="header">
            <div className="logo">
                <img src="/image/logo.png" height="50" />
            </div>
            <div className="search">
                <Space direction="horizontal">
                    <DatePicker onChange={onChange} status="error" />
                    <AutoComplete
                        style={{
                            width: 420,
                        }}
                        options={optionsAutoComplete}
                        status="error"
                        placeholder="Choose a model name"
                        filterOption={(inputValue, option) =>
                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                    />
                    <Button shape="circle" icon={<SearchOutlined />} />
                </Space>
            </div>
        </div>
    )
}

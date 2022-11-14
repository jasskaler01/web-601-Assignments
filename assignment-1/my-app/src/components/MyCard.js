import  {Card,Col} from "antd"
export default function MyCard(){
    return(
        <Col className="gutter-row" xs={24} xl={8}>
            <Card>
                <p>content</p>
            </Card>
        </Col>
    )
}
import { Alert } from "@mui/material";
import React from "react";
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import Button from "@mui/joy/Button";


const Acc = (props)=>{

    
    /*  KAUSTUBH'S CODE */
    function num_digits(x)
    {
        let ans=0;
        while(x>=1)
        {
            ans++;
            x=x/10;
        }
        return ans;
    }
    function random_number()
    {
        let x=Math.random();
        let y=Math.pow(10,15);
        return Math.floor(x*y);
    }
    function random_number_between(a,b)
    {
        if(a>b)
        {
            let temp=a;
            a=b;
            b=temp;
        }
        let size=(b-a+1);
        let val=random_number();
        val=val%size;
        val=val+a;
        return val;
    }
    function array_sum(arr,n)
    {
        let sum=0;
        let j=0;
        while(j<n)
        {
            sum=sum+arr[j];
            j++;
        }
        return sum;
    }
    function choice_picker(weights,n)
    {
        let size=array_sum(weights,n);
        let pick=random_number_between(1,size);
        let j=0;
        let nsum=0;
        while(j<n && nsum<pick)
        {
            nsum=nsum+weights[j];
            j++;
        }
        j--;
        return j;
    }

    /* GRAPH CODE */
    const data = [];

    props.data.options.map((item,idx) =>{
        data.push({value : props.data.weights[idx], label: item})
    })

    const size = {
        width: 700,
        height: 250,
    };

    const StyledText = styled('text')(({ theme }) => ({
        fill: theme.palette.text.primary,
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: 20,
    }));

    function PieCenterLabel({ children }) {
        const { width, height, left, top } = useDrawingArea();
        return (
            <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
            </StyledText>
        );
    }

    const [pick,setPick] = React.useState(choice_picker(props.data.weights,props.data.weights.length))

    const handleOnClick = ()=>{
        setPick(choice_picker(props.data.weights,props.data.weights.length));
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>

            <div className="option-setter">
                <div >
                    {
                        props.data.options.map((e,idx)=>(
                            
                            (idx == pick) 
                            ? 
                            <Alert severity="success" className="option">{e}</Alert> 
                            : 
                            <Alert severity="info" className="option">{e}</Alert> 
                        ))
                    }
                </div>
                <div>
                    <PieChart series={[{ data, innerRadius: 100 }]} {...size}>
                        <PieCenterLabel>Preference</PieCenterLabel>
                    </PieChart>
                </div>
            </div>
            <Button color="primary" variant="soft" onClick={handleOnClick} sx={{width: '100px'}}>Re-pick</Button>
        </div>
    )
}

export default Acc


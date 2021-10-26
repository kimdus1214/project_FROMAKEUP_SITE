import React from 'react';
import styled from 'styled-components';
import { DarkTheme, lightTheme } from '../theme/theme';

const ThemeBtnBlock = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    background: #ddd;
    position: absolute;
    right: 2rem;
    top: 5rem;
`;

const themeVer = [
    {
        name: '라이트',
        theme: lightTheme
    },
    {
        name: '다크',
        theme: DarkTheme
    }
]
function ThemeBtn({onthemeChange}) {
    return (
        <ThemeBtnBlock>
            {themeVer.map((theme, index)=>(
                <span key={index} onClick={()=>onthemeChange(theme.name, theme.theme)}>{theme.name}</span>
            ))}
        </ThemeBtnBlock>
    )
}

export default ThemeBtn;

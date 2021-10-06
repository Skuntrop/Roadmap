import React from "react";
import {render} from "react-dom";

function  Authorization(){
    const handleClick = e =>{
        e.preventDefault();
        alert("Добро пожаловать");
    }

    return(
        <form class="form-horizontal">
            <div class="form-group">
                <label class="col-xs-2 control-label">Логин: </label>
                <div class="col-xs-10">
                    <input type="email" className="form-control" placeholder="Введите логин"/>
                </div>
            </div>
            <div class="form-group">
                <label class="col-xs-2 control-label">Пароль: </label>
                <div className="col-xs-10">
                    <input type="password" className="form-control" placeholder="Введите пароль"/>
                </div>
            </div>
            <button onClick={handleClick} type="submit" class="btn btn-default">
                Войти
            </button>
        </form>
    )
}

render(<Authorization />, document.getElementById("root"))
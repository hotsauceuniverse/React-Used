import React from 'react';

class UncontrolledComponent extends React.Component {
  inputRef = React.createRef(); // 렌더가 되는 시점에 inputRef라는 참조에 넣어 놓고 필요할때 꺼내 쓴다.(저장장소)

  render() {
    console.log('inital render', this.inputRef)
    return (
      <div>
        <input ref={this.inputRef} />
        <button onClick={this.click}>전송</button>
      </div>
    );
  }

  conponentDidMount() {
    console.log('conponentDidMount', this.inputRef);
  }

  click = () => {
    // input 엘리먼트의 현재 상태 값(value)를 꺼내서 전송한다.
    // 레퍼런스를 가지고 있는 방식이 아닌, 그 상황에 querySelector를 통해서 실제 DOM을 조회하는 방식이다.
    // const input = document.querySelector('#my-input');
    // console.log(input.value);

    console.log(this.inputRef.current.value);
  };
}

export default UncontrolledComponent;

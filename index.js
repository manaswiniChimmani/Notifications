const Notification = (props) => {
  //  Write your code here.
  const { textContent, className, iurl } = props;
  return (
    <div className={className}>
      <img src={iurl} className="img1" />
      <p className="m1">{textContent}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div>
      <h1>Notifications</h1>
    </div>
    <div class="container">
      <Notification
        textContent="Information Message"
        className="n1"
        iurl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        textContent="Success Message"
        className="n2"
        iurl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        textContent="Warning Message"
        className="n3"
        iurl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        textContent="Error Message"
        className="n4"
        iurl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

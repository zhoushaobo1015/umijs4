import { useIntl } from 'react-intl';

function DemoPage0() {

  let { formatMessage } = useIntl();

  return (
    <div className="demo">
      demo
    </div>
  );
}

export default DemoPage0
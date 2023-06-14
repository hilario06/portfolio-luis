import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      { children }
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

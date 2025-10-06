import './TitleBreadcrumbs.scss';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TitleBreadcrumbs({ title, breadcrumbs }) {
  return (
    <Box className="title_breadcrumbs">
      <h1>{title}</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className={`breadcrumb-item${index === breadcrumbs.length - 1 ? ' active' : ''}`}>
              {index === breadcrumbs.length - 1 ? (
                crumb.label
              ) : (
                <Button component={Link} to={crumb.href}>{crumb.label}</Button>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </Box>
  );
}
import React, {Component } from 'react';
import {connect} from 'react-redux';
import {fetchProfile} from '../../actions/profile';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HeaderBar from '../../components/headerbar';
import Chip from 'react-toolbox/lib/chip';
import Avatar from 'react-toolbox/lib/avatar';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {List, ListItem, ListSubHeader} from 'react-toolbox/lib/list';
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import Circle from '../../components/circle';
import ContactCard from '../../components/contact_card';
import EducationList from '../../components/education_list';
import CircularLoader from '../../components/circular_loader';
import ProfileEdit from '../../components/profile_edit';
import { Scrollbars } from 'react-custom-scrollbars';
import Theme from './theme.scss';


class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      profileEditActive: false
    }
    this.handleToggleProfileEdit = this.handleToggleProfileEdit.bind(this);
  }

  renderTags(tags) {
    const chips = tags.map(tag => {
      return (
        <Chip className={Theme.chip} key={tag.name}>
          <Avatar className={Theme.tagAvatar} icon="label" />
          {tag.name}
        </Chip>);
    });
    return (<div>{chips}</div>);
  }

  handleToggleProfileEdit = () => {
    this.setState({profileEditActive: !this.state.profileEditActive});
  }

  componentWillMount() {
    this.props.fetchProfile('jka');
  }

  render() {
    let { profile, loading, error } = this.props.activeProfile;
    loading = loading || !profile;
    if(loading) {
      return (
        <div>
          <HeaderBar 
            iconChild={<Circle />}
            title=""
            subtitle=""/>
          <CircularLoader />
        </div>
      );
    }
    return (
      <div>
        <HeaderBar
          actions={
            <IconMenu className={Theme.icon} icon='more_vert' position='topRight' menuRipple>
              <MenuItem value='edit' icon='create' caption='Redigera' onClick={this.handleToggleProfileEdit} />
            </IconMenu>}
          iconChild={<Circle />}
          title={profile.name}
          subtitle={profile.title}
          tagChild={this.renderTags(profile.tags)}
        />
        {this.state.profileEditActive}
        <ProfileEdit active={this.state.profileEditActive} handleToggle={this.handleToggleProfileEdit} profile={profile} />
        <Grid className={Theme.container}>
          <Row className={Theme.containerRow}>
            <Col xs={12} md={12}>
              <Card>
                <CardTitle>Om</CardTitle>
                <CardText>
                  {profile.about}
                </CardText>
              </Card>
            </Col>
          </Row>
          <Row className={Theme.containerRow}>
            <Col xs={12} md={6}>
              <ContactCard address={`${profile.address}, ${profile.zipcode}, ${profile.city}`} phone={profile.phone} email={profile.email} edited={false} />
            </Col>
            <Col xs={12} md={6}>
              <Card>
                <CardTitle>Snabba fakta</CardTitle>
                <CardText>
                  <List className={Theme.denseList}>
                    <ListItem caption="År i branschen" legend="5" />
                    <ListItem caption="Bor" legend="Malmö" />
                    <ListItem caption="Drivs av" legend="Utveckling! Min egen och andras." />
                    <ListItem caption="Hobby" legend="Matlagning, programmering och dataspel" />
                  </List>
                </CardText>
              </Card>
            </Col>
          </Row>
          <Row className={Theme.containerRow}>
            <Col xs={12} md={12}>
              <EducationList educations={profile.educations} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    activeProfile: state.profile.activeProfile
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProfile: (id) => {
           dispatch(fetchProfile(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
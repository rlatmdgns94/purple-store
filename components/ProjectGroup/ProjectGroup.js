import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  ProjectWrap,
  ProjectList,
  ProjectItem,
  ProjectColor,
  ProjectItemContent,
  ProjectButtonArea,
  TypeButton,
  FilterButton,
  ProjectSetButton,
  ProjectTitle,
  People,
  ProjectStatus,
  ProJectStarButton,
  StatusArea,
  StatusItem,
  ProjectAlarmCount,
  TypeButtonArea,
  SetButtonArea,
} from './styles';
import { FAVORITE_PROJECT_REQUEST, UNFAVORITE_PROJECT_REQUEST } from '../../reducers/project';

const ProjectGroup = ({ projects, favoriteProjects }) => {
  console.log('projects', projects);
  console.log('favoriteProjects', favoriteProjects);
  const dispatch = useDispatch();
  const clickFavorite = (e, projectId, title) => {
    e.preventDefault();
    console.log(projectId);
    dispatch({
      type: FAVORITE_PROJECT_REQUEST,
      data: { projectId },
      title,
    });
  };
  const clickUnFavorite = (e, projectId, title) => {
    e.preventDefault();
    dispatch({
      type: UNFAVORITE_PROJECT_REQUEST,
      data: { projectId },
      title,
    });
  };
  return (
    <ProjectWrap>
      {/* <ProjectButtonArea>
        <TypeButtonArea>
          <TypeButton type="button" buttonType="card" active />
          <TypeButton type="button" buttonType="list" />
        </TypeButtonArea>
        <SetButtonArea>
          <FilterButton type="button" active />
          <ProjectSetButton type="button" />
        </SetButtonArea>
      </ProjectButtonArea> */}
      <div>
        {favoriteProjects.length > 0
          && (
            <>
              <ProjectTitle>즐겨찾기</ProjectTitle>
              <ProjectList>
                {favoriteProjects.map((project) => (
                  <li key={project.id}>
                    <Link href="/posts/[id]" as={`/posts/${project.id}`}>
                      <a>
                        <ProjectItem>
                          <ProjectColor />
                          <ProjectItemContent>
                            <ProJectStarButton type="button" active onClick={(e) => clickUnFavorite(e, project.id, project.title)} />
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <ProjectStatus>
                              <People>878</People>
                            </ProjectStatus>
                          </ProjectItemContent>
                        </ProjectItem>
                      </a>
                    </Link>
                  </li>
                ))}
              </ProjectList>
            </>
          )}
      </div>
      <div>
        <ProjectTitle>참여중</ProjectTitle>
        <ProjectList>
          {projects.map((project, index) => (
            <li key={project.id}>
              <Link href="/posts/[id]" as={`/posts/${project.id}`}>
                <a>
                  <ProjectItem>
                    <ProjectColor />
                    <ProjectItemContent>
                      <ProJectStarButton type="button" onClick={(e) => clickFavorite(e, project.id, project.title)} />
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectStatus>
                        <People>878</People>
                      </ProjectStatus>
                    </ProjectItemContent>
                  </ProjectItem>
                </a>
              </Link>
            </li>
          ))}
        </ProjectList>
      </div>
    </ProjectWrap>
  );
};

export { ProjectGroup };
